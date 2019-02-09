const path = require('path');
const qs = require('querystring');
const assert = require('assert');
const suncalc = require('suncalc');
const nodePersist = require('node-persist');
const Queue = require('p-queue');
const moment = require('moment');
const {stripIndent} = require('common-tags');
const cloudinary = require('cloudinary');
const axios = require('axios');
const {get, maxBy} = require('lodash');

const render = require('./render.js');
const weathers = require('./weathers.js');

const queue = new Queue({concurrency: 1});

// eslint-disable-next-line array-plural/array-plural
const position = [35.659, 139.685]; // 駒場東大前駅

const moonEmojis = [
	':new_moon:',
	':waxing_crescent_moon:',
	':first_quarter_moon:',
	':waxing_gibbous_moon:',
	':full_moon:',
	':waning_gibbous_moon:',
	':last_quarter_moon:',
	':waning_crescent_moon:',
];

// https://developer.accuweather.com/weather-icons
const conditionIds = {
	clear: [1, 2],
	sunny: [1, 2, 3, 4, 30, 31, 32],
	haze: [5],
	cloud: [6, 7, 8],
	mist: [11],
	sunshower: [14, 17, 21],
	thunderstorm: [15, 16],
	rain: [18, 26],
	shower: [12, 13],
	changing: [19, 20],
	snow: [22, 23, 24],
	sleet: [25, 29],
	drizzle: [],
	dust: [],
};
const weatherEmojis = {
	1: ':sunny:',
	2: ':sunny:',
	3: ':mostly_sunny:',
	4: ':partly_sunny:',
	5: ':fog:',
	6: ':barely_sunny:',
	7: ':cloud:',
	8: ':cloud:',
	11: ':fog:',
	12: ':umbrella_with_rain_drops:',
	13: ':umbrella_with_rain_drops:',
	14: ':partly_sunny_rain:',
	15: ':thunder_cloud_and_rain:',
	16: ':thunder_cloud_and_rain:',
	17: ':thunder_cloud_and_rain:',
	18: ':umbrella_with_rain_drops:',
	19: ':cloud:',
	20: ':barely_sunny:',
	21: ':barely_sunny:',
	22: ':snowman:',
	23: ':snowman:',
	24: ':ice_skate:',
	25: ':umbrella_with_rain_drops:',
	26: ':umbrella_with_rain_drops:',
	29: ':umbrella_with_rain_drops:',
	30: ':sunny:',
	31: ':sunny:',
	32: ':sunny:',
};

const FtoC = (F) => (F - 32) * 5 / 9;
const miphToMps = (miph) => miph * 0.447;
const inchToMm = (inch) => inch * 25.4;

module.exports = async ({webClient: slack}) => {
	const storage = nodePersist.create({
		dir: path.resolve(__dirname, '__state__'),
	});
	await storage.init();

	const tick = async () => {
		const lastSunrise = await storage.getItem('lastSunrise') || moment().subtract(1, 'day');
		const now = new Date();
		const tomorrow = moment(lastSunrise).utcOffset(9).endOf('day').add(12, 'hour').toDate();
		const {sunrise, sunset} = suncalc.getTimes(tomorrow, ...position);

		if (sunrise <= now) {
			await storage.setItem('lastSunrise', sunrise.getTime());
			const {rise: moonrise, set: moonset} = suncalc.getMoonTimes(tomorrow, ...position);
			const {phase: moonphase} = suncalc.getMoonIllumination(now, ...position);
			const moonEmoji = moonEmojis[Math.round(moonphase * 8) % 8];

			const {data} = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/226396?${qs.encode({
				apikey: process.env.ACCUWEATHER_KEY,
				details: 'true',
			})}`);

			const lastWeather = await storage.getItem('lastWeather') || null;
			const weatherHistories = await storage.getItem('weatherHistories') || [];

			const month = moment().utcOffset(9).month() + 1;
			const date = moment().utcOffset(9).date();

			const weatherId = get(data, ['DailyForecasts', 0, 'Day', 'Icon']);

			const temperature = FtoC(get(data, ['DailyForecasts', 0, 'Temperature', 'Maximum', 'Value']));
			let temperatureLevel = null;
			if (temperature < 5) {
				temperatureLevel = 0;
			} else if (temperature < 12) {
				temperatureLevel = 1;
			} else if (temperature < 18) {
				temperatureLevel = 2;
			} else if (temperature < 28) {
				temperatureLevel = 3;
			} else if (temperature < 32) {
				temperatureLevel = 4;
			} else {
				temperatureLevel = 5;
			}

			const totalLiquid = inchToMm(get(data, ['DailyForecasts', 0, 'Day', 'TotalLiquid', 'Value']));
			let rainLevel = null;
			if (totalLiquid < 0.01) {
				rainLevel = 0;
			} else if (totalLiquid < 3) {
				rainLevel = 1;
			} else if (totalLiquid < 10) {
				rainLevel = 2;
			} else if (totalLiquid < 20) {
				rainLevel = 3;
			} else {
				rainLevel = 4;
			}

			const wind = miphToMps(get(data, ['DailyForecasts', 0, 'Day', 'Wind', 'Speed', 'Value']));
			const winddeg = get(data, ['DailyForecasts', 0, 'Day', 'Wind', 'Direction', 'Degrees']);
			let windLevel = null;
			if (wind < 3) {
				windLevel = 0;
			} else if (wind < 8) {
				windLevel = 1;
			} else if (wind < 15) {
				windLevel = 2;
			} else if (wind < 25) {
				windLevel = 3;
			} else {
				windLevel = 4;
			}

			const normalizedWeathers = Object.entries(weathers).map(([name, conditions]) => ({name, conditions}));

			const matchingWeathers = normalizedWeathers.filter(({conditions}) => {
				const condition = Object.assign({}, ...conditions);

				if (condition.temperature !== undefined && condition.temperature !== temperatureLevel) {
					return false;
				}

				if (condition.rain !== undefined && condition.rain !== rainLevel) {
					return false;
				}

				if (condition.wind !== undefined && condition.wind !== windLevel) {
					return false;
				}

				if (condition.winddeg !== undefined) {
					if (condition.winddeg === 0) {
						if (!(windLevel >= 1 && (winddeg <= 45 || 315 <= winddeg))) {
							return false;
						}
					} else {
						if (!(windLevel >= 1 && condition.winddeg - 45 <= winddeg && winddeg <= condition.winddeg + 45)) {
							return false;
						}
					}
				}

				// TODO: fix
				if (condition.humidity !== undefined) {
					return false;
				}

				if (condition.continuingCondition !== undefined) {
					assert(Array.isArray(conditionIds[condition.continuingCondition]));
					if (
						!lastWeather ||
						!conditionIds[condition.continuingCondition].includes(lastWeather.weatherId) ||
						!conditionIds[condition.continuingCondition].includes(weatherId)
					) {
						return false;
					}
				}

				if (condition.temperatureChange !== undefined) {
					if (!lastWeather) {
						return false;
					}

					if (condition.temperatureChange === 1 && !(lastWeather.temperature - temperature >= 5)) {
						return false;
					}

					if (condition.temperatureChange === -1 && !(lastWeather.temperature - temperature <= -5)) {
						return false;
					}
				}

				if (condition.condition !== undefined) {
					assert(Array.isArray(conditionIds[condition.condition]));
					if (!conditionIds[condition.condition].includes(weatherId)) {
						return false;
					}
				}

				if (condition.month !== undefined && !condition.month.includes(month)) {
					return false;
				}

				if (condition.date !== undefined && !condition.date.some(([m, d]) => m === month && d === date)) {
					return false;
				}

				return true;
			});

			assert(matchingWeathers.length > 0);

			const matchingWeather = maxBy(matchingWeathers, ({name, conditions}) => {
				const condition = Object.assign({}, ...conditions);
				let score = 0;

				if (condition.temperature !== undefined) {
					score += 2;
				}

				if (condition.rain !== undefined) {
					score += 3;
				}

				if (condition.wind !== undefined) {
					score += 2;
				}

				if (condition.winddeg !== undefined) {
					score += 4;
				}

				if (condition.continuingCondition !== undefined) {
					score += 4;
				}

				if (condition.temperatureChange !== undefined) {
					score += 3;
				}

				if (condition.condition !== undefined) {
					score += 3;
				}

				if (condition.month !== undefined) {
					score += 6 / condition.month.length;
				}

				if (condition.date !== undefined) {
					score += 30;
				}

				const latestAnnounce = weatherHistories.findIndex(({weather}) => weather.name === name);
				if (latestAnnounce !== -1) {
					score -= 30 / (latestAnnounce + 1);
				}

				return score;
			});

			await storage.setItem('lastWeather', {weatherId, temperature});
			await storage.setItem('weatherHistories', [
				{date: Date.now(), weather: matchingWeather},
				...weatherHistories,
			]);

			const imageData = await render(matchingWeather.name);
			const cloudinaryData = await new Promise((resolve, reject) => {
				cloudinary.v2.uploader
					.upload_stream({resource_type: 'image'}, (error, response) => {
						if (error) {
							reject(error);
						} else {
							resolve(response);
						}
					})
					.end(imageData);
			});

			slack.chat.postMessage({
				channel: process.env.CHANNEL_SANDBOX,
				text: ':ahokusa-top-right::ahokusa-bottom-left::heavy_exclamation_mark:',
				username: 'sunrise',
				icon_emoji: ':sunrise:',
				attachments: [{
					color: '#FFA726',
					title: `本日の天気${weatherEmojis[weatherId]}「${matchingWeather.name}」`,
					title_link: 'https://www.accuweather.com/ja/jp/tokyo/226396/daily-weather-forecast/226396',
					image_url: cloudinaryData.secure_url,
					fallback: matchingWeather.name,
				}, {
					color: '#1976D2',
					title: '本日のこよみ',
					text: stripIndent`
						:sunrise_over_mountains: *日の出* ${moment(sunrise).format('HH:mm')} ～ *日の入* ${moment(sunset).format('HH:mm')}
						${moonEmoji} *月の出* ${moment(moonrise).format('HH:mm')} ～ *月の入* ${moment(moonset).format('HH:mm')}
					`,
				}],
			});
		}
	};

	queue.add(tick);
	setInterval(() => {
		queue.add(tick);
	}, 10 * 1000);
};
