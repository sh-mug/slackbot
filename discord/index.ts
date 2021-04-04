import type {ContextBlock} from '@slack/web-api';
import Discord, {TextChannel, Collection, Snowflake, GuildMember, VoiceChannel} from 'discord.js';
import type {SlackInterface} from '../lib/slack';
import {getMemberName} from '../lib/slackUtils';
import Hayaoshi from './hayaoshi';
import TTS from './tts';
import {v1beta1 as GoogleCloudTextToSpeech} from '@google-cloud/text-to-speech';
import {promises as fs} from 'fs';
import path from 'path';

const {TextToSpeechClient} = GoogleCloudTextToSpeech;
const client = new TextToSpeechClient();

const discord = new Discord.Client();
discord.login(process.env.TSGBOT_DISCORD_TOKEN);

const getMembersBlock = (roomName: string, members: Collection<Snowflake, GuildMember>) => (
	{
		type: 'context',
		elements: [
			{
				type: 'mrkdwn',
				text: `*[${roomName}]*`,
			},
			...Array.from(members.values()).slice(0, 8)
				.map((member) => (
					{
						type: 'image',
						image_url: member.user.displayAvatarURL({format: 'png', size: 64}),
						alt_text: member.displayName,
					}
				)),
			{
				type: 'plain_text',
				emoji: true,
				text: `${members.size} users`,
			},
		],
	} as ContextBlock
);

export default ({webClient: slack, rtmClient: rtm}: SlackInterface) => {
	const joinVoiceChannelFn = () => {
		const discordSandbox = discord.channels.cache.get(process.env.DISCORD_SANDBOX_VOICE_CHANNEL_ID) as VoiceChannel;
		return discordSandbox.join();
	};

	const hayaoshi = new Hayaoshi(joinVoiceChannelFn);
	const tts = new TTS(joinVoiceChannelFn);

	hayaoshi.on('message', (message: string) => {
		const discordTextSandbox = discord.channels.cache.get(process.env.DISCORD_SANDBOX_TEXT_CHANNEL_ID) as TextChannel;
		return discordTextSandbox.send(message);
	});

	tts.on('message', (message: string) => {
		const discordTextSandbox = discord.channels.cache.get(process.env.DISCORD_SANDBOX_TEXT_CHANNEL_ID) as TextChannel;
		return discordTextSandbox.send(message);
	});

	discord.on('message', async (message) => {
		if (message.channel.id === process.env.DISCORD_SANDBOX_TEXT_CHANNEL_ID && !message.member.user.bot) {
			hayaoshi.onMessage(message);
			tts.onMessage(message);
		}
	});

	discord.on('voiceStateUpdate', (oldState, newState) => {
		if (oldState.member.user.bot) {
			return;
		}

		const nick = oldState.member.displayName;

		// leave
		if (oldState.channel !== null && newState.channel === null) {
			const roomName = oldState.channel.name;
			const roomId = oldState.channel.id;
			const count = oldState.channel.members.size;
			slack.chat.postMessage({
				channel: process.env.CHANNEL_SANDBOX,
				username: 'Discord',
				icon_emoji: ':discord:',
				text: `＊${nick}＊が<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${roomId}|${roomName}>からログアウトしました\n現在のアクティブ人数 ${count}人`,
				blocks: [
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: `＊${nick}＊が<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${roomId}|${roomName}>からログアウトしました`,
						},
					},
					getMembersBlock(roomName, oldState.channel.members),
				],
			});
		}

		// join
		if (newState.channel !== null && oldState.channel === null) {
			const roomName = newState.channel.name;
			const roomId = newState.channel.id;
			const count = newState.channel.members.size;
			slack.chat.postMessage({
				channel: process.env.CHANNEL_SANDBOX,
				username: 'Discord',
				icon_emoji: ':discord:',
				text: `＊${nick}＊が<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${roomId}|${roomName}>にログインしました\n現在のアクティブ人数 ${count}人`,
				blocks: [
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: `＊${nick}＊が<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${roomId}|${roomName}>にログインしました`,
						},
					},
					getMembersBlock(roomName, newState.channel.members),
				],
			});
		}

		// move
		if (oldState.channel !== null && newState.channel !== null && oldState.channel.id !== newState.channel.id) {
			const newRoomName = newState.channel.name;
			const newRoomId = newState.channel.id;
			const oldRoomName = oldState.channel.name;
			const oldRoomId = oldState.channel.id;

			slack.chat.postMessage({
				channel: process.env.CHANNEL_SANDBOX,
				username: 'Discord',
				icon_emoji: ':discord:',
				text: `＊${nick}＊が<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${oldRoomId}|${oldRoomName}>から<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${newRoomId}|${newRoomName}>に移動しました`,
				blocks: [
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: `＊${nick}＊が<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${oldRoomId}|${oldRoomName}>から<https://discord.com/channels/${process.env.DISCORD_SERVER_ID}/${newRoomId}|${newRoomName}>に移動しました`,
						},
					},
					getMembersBlock(oldRoomName, oldState.channel.members),
					getMembersBlock(newRoomName, newState.channel.members),
				],
			});
		}
	});
};
