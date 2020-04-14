export type Difficulty = 'baby' | 'easy' | 'medium' | 'hard' | 'professional';

interface Achievement {
	id: string,
	difficulty: Difficulty,
	title: string,
	condition: string,
	category: string,
	counter?: string,
	reaction?: string,
	value?: number,
	manual?: true,
}

const achievements: Achievement[] = [
	{
		id: 'chat',
		difficulty: 'baby',
		title: 'はじめまして!',
		condition: 'パブリックなチャンネルで初めて発言する',
		category: 'basic',
		counter: 'chats',
		value: 1,
	},
	{
		id: 'chat-10times',
		difficulty: 'easy',
		title: 'ｽｯｺｺｺ',
		condition: 'パブリックなチャンネルで10回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 10,
	},
	{
		id: 'chat-1000times',
		difficulty: 'hard',
		title: '話の種',
		condition: 'パブリックなチャンネルで1000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 1000,
	},
	{
		id: 'chat-10000times',
		difficulty: 'hard',
		title: '竿の先',
		condition: 'パブリックなチャンネルで10000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 10000,
	},
	{
		id: 'chat-20000times',
		difficulty: 'hard',
		title: '禍の門',
		condition: 'パブリックなチャンネルで20000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 20000,
	},
	{
		id: 'chat-30000times',
		difficulty: 'hard',
		title: '喋喋喃喃',
		condition: 'パブリックなチャンネルで30000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 30000,
	},
	{
		id: 'chat-50000times',
		difficulty: 'hard',
		title: '縷縷綿綿',
		condition: 'パブリックなチャンネルで50000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 50000,
	},
	{
		id: 'chat-100000times',
		difficulty: 'hard',
		title: '立て板に水',
		condition: 'パブリックなチャンネルで100000回以上発言する',
		category: 'basic',
		counter: 'chats',
		value: 100000,
	},
	{
		id: 'chat-10days',
		difficulty: 'medium',
		title: '常連',
		condition: 'パブリックなチャンネルでのべ10日間発言する',
		category: 'basic',
		counter: 'chatDays',
		value: 10,
	},
	{
		id: 'chat-100days',
		difficulty: 'hard',
		title: 'いつものメンバー',
		condition: 'パブリックなチャンネルでのべ100日間発言する',
		category: 'basic',
		counter: 'chatDays',
		value: 100,
	},
	{
		id: 'chat-1000days',
		difficulty: 'professional',
		title: 'TSGの主',
		condition: 'パブリックなチャンネルでのべ1000日間発言する',
		category: 'basic',
		counter: 'chatDays',
		value: 1000,
	},

	// reactions

	{
		id: 'reaction-ha-5',
		difficulty: 'hard',
		title: '支離滅裂',
		condition: '1つのメッセージに5人以上から:ha:リアクションをもらう',
		category: 'reactions',
		reaction: 'ha',
		value: 5,
	},
	{
		id: 'reaction-wakari-5',
		difficulty: 'hard',
		title: 'デビルマン',
		condition: '1つのメッセージに5人以上から:wakari:リアクションをもらう',
		category: 'reactions',
		reaction: 'wakari',
		value: 5,
	},
	{
		id: 'reaction-koresuki-5',
		difficulty: 'hard',
		title: 'ジャガーマン',
		condition: '1つのメッセージに対し5人以上から:koresuki:リアクションをもらう',
		category: 'reactions',
		reaction: 'koresuki',
		value: 5,
	},
	{
		id: 'reaction-koresuki-10',
		difficulty: 'professional',
		title: 'あーここすき',
		condition: '1つのメッセージに対し10人以上から:koresuki:リアクションをもらう',
		category: 'reactions',
		reaction: 'koresuki',
		value: 10,
	},
	{
		id: 'reaction-yakuza-5',
		difficulty: 'hard',
		title: '今日からやの付く自由業',
		condition: '1つのメッセージに対し5人以上から:yakuza:リアクションをもらう',
		category: 'reactions',
		reaction: 'yakuza',
		value: 5,
	},
	{
		id: 'reaction-shoki-ka-5',
		difficulty: 'hard',
		title: '狂気の沙汰ほど面白い...！',
		condition: '1つのメッセージに対し5人以上から:shoki-ka:リアクションをもらう',
		category: 'reactions',
		reaction: 'shoki-ka',
		value: 5,
	},
	{
		id: 'reaction-seyana-5',
		difficulty: 'hard',
		title: '聞いてよアカネちゃん！',
		condition: '1つのメッセージに対し5人以上から:seyana:リアクションをもらう',
		category: 'reactions',
		reaction: 'seyana',
		value: 5,
	},
	{
		id: 'reaction-chian-ga-nai-5',
		difficulty: 'hard',
		title: 'TSGMELTDOWN',
		condition: '1つのメッセージに対し5人以上から:chian-ga-nai:リアクションをもらう',
		category: 'reactions',
		reaction: 'chian-ga-nai',
		value: 5,
	},
	{
		id: 'reaction-context-5',
		difficulty: 'hard',
		title: 'コンテキスト不一致',
		condition: '1つのメッセージに対し5人以上から:context:リアクションをもらう',
		category: 'reactions',
		reaction: 'context',
		value: 5,
	},
	{
		id: 'reaction-pro-5',
		difficulty: 'hard',
		title: 'みんな違ってみんなプロ',
		condition: '1つのメッセージに対し5人以上から:pro:リアクションをもらう',
		category: 'reactions',
		reaction: 'pro',
		value: 5,
	},
	{
		id: 'reaction-pro-10',
		difficulty: 'professional',
		title: '仕事の流儀',
		condition: '1つのメッセージに対し10人以上から:pro:リアクションをもらう',
		category: 'reactions',
		reaction: 'pro',
		value: 10,
	},
	{
		id: 'reaction-shirimetsuretsu-5',
		difficulty: 'hard',
		title: '君はお肉が好き？',
		condition: '1つのメッセージに対し5人以上から:shirimetsuretsu:リアクションをもらう',
		category: 'reactions',
		reaction: 'shirimetsuretsu',
		value: 5,
	},
	{
		id: 'reaction-riaru-5',
		difficulty: 'hard',
		title: '理性ある生き物',
		condition: '1つのメッセージに対し5人以上から:riaru:リアクションをもらう',
		category: 'reactions',
		reaction: 'riaru',
		value: 5,
	},
	{
		id: 'reaction-erai-5',
		difficulty: 'hard',
		title: '地位は人をつくる',
		condition: '1つのメッセージに対し5人以上から:erai:リアクションをもらう',
		category: 'reactions',
		reaction: 'erai',
		value: 5,
	},
	{
		id: 'reaction-guchol-5',
		difficulty: 'hard',
		title: '台風の目',
		condition: '1つのメッセージに対し5人以上から:guchol:リアクションをもらう',
		category: 'reactions',
		reaction: 'guchol',
		value: 5,
	},
	{
		id: 'reaction-ナンやねん-ナンなので-5',
		difficulty: 'hard',
		title: 'お前はナンなんだ',
		condition: '1つのメッセージに対し5人以上から:ナンやねん-ナンなので:リアクションをもらう',
		category: 'reactions',
		reaction: 'ナンやねん-ナンなので',
		value: 5,
	},
	{
		id: 'reaction-hideo54-5',
		difficulty: 'hard',
		title: 'ドジでよく泣くキツネの子',
		condition: '1つのメッセージに対し5人以上から:hideo54:リアクションをもらう',
		category: 'reactions',
		reaction: 'hideo54',
		value: 5,
	},
	{
		id: 'reaction-kombu-5',
		difficulty: 'hard',
		title: '海藻を買いそう',
		condition: '1つのメッセージに対し5人以上から:kombu:リアクションをもらう',
		category: 'reactions',
		reaction: 'kombu',
		value: 5,
	},
	{
		id: 'reaction-hototogisu-5',
		difficulty: 'hard',
		title: '鳥さんが鳴いとるやんけ',
		condition: '1つのメッセージに対し5人以上から:hototogisu:リアクションをもらう',
		category: 'reactions',
		reaction: 'hototogisu',
		value: 5,
	},
	{
		id: 'reaction-ojigineko-5',
		difficulty: 'hard',
		title: 'ねこは今日もあなたの後ろでおじぎしている',
		condition: '1つのメッセージに対し5人以上から:ojigineko:リアクションをもらう',
		category: 'reactions',
		reaction: 'ojigineko',
		value: 5,
	},
	{
		id: 'reaction-serval-5',
		difficulty: 'hard',
		title: 'ねぇ、あなたは何のフレンズ？',
		condition: '1つのメッセージに対し5人以上から:serval:リアクションをもらう',
		category: 'reactions',
		reaction: 'serval',
		value: 5,
	},
	{
		id: 'reaction-pizzacat83-5',
		difficulty: 'hard',
		title: '415 Unsupported PizzaNeco Type',
		condition: '1つのメッセージに対し5人以上から:pizzacat83:リアクションをもらう',
		category: 'reactions',
		reaction: 'pizzacat83',
		value: 5,
	},
	{
		id: 'reaction-kurgm-5',
		difficulty: 'hard',
		title: '胡麻は2粒でもピリリと黒い',
		condition: '1つのメッセージに対し5人以上から:kurgm:リアクションをもらう',
		category: 'reactions',
		reaction: 'kurgm',
		value: 5,
	},
	{
		id: 'reaction-genius-5',
		difficulty: 'hard',
		title: '巨人の肩の上で',
		condition: '1つのメッセージに対し5人以上から:genius:リアクションをもらう',
		category: 'reactions',
		reaction: 'genius',
		value: 5,
	},
	{
		id: 'reaction-kachi-5',
		difficulty: 'hard',
		title: '明日まで考えておいてください。そしたら何か、見えてくるはずです',
		condition: '1つのメッセージに対し5人以上から:kachi:リアクションをもらう',
		category: 'reactions',
		reaction: 'kachi',
		value: 5,
	},
	{
		id: 'reaction-yami-5',
		difficulty: 'hard',
		title: '永劫の闇を司るTSGer',
		condition: '1つのメッセージに対し5人以上から:yami:リアクションをもらう',
		category: 'reactions',
		reaction: 'yami',
		value: 5,
	},
	{
		id: 'reaction-korosuzo-5',
		difficulty: 'hard',
		title: '丑三つ DOKI DOKI',
		condition: '1つのメッセージに対し5人以上から:korosuzo:リアクションをもらう',
		category: 'reactions',
		reaction: 'korosuzo',
		value: 5,
	},
	{
		id: 'reaction-mnemo-5',
		difficulty: 'hard',
		title: 'プログラミング風実績解放ゲーム',
		condition: '1つのメッセージに対し5人以上から:mnemo:リアクションをもらう',
		category: 'reactions',
		reaction: 'mnemo',
		value: 5,
	},
	{
		id: 'reaction-tada-5',
		difficulty: 'hard',
		title: 'tadaより嬉しいものはない',
		condition: '1つのメッセージに対し5人以上から:tada:リアクションをもらう',
		category: 'reactions',
		reaction: 'tada',
		value: 5,
	},
	{
		id: 'reaction-no-zabuton-5',
		difficulty: 'hard',
		title: '山田くん座布団一枚持ってって',
		condition: '1つのメッセージに対し5人以上から:no-zabuton:リアクションをもらう',
		category: 'reactions',
		reaction: 'no-zabuton',
		value: 5,
	},
	{
		id: 'reaction-yosasou-5',
		difficulty: 'hard',
		title: 'LooksGoodToTSG',
		condition: '1つのメッセージに対し5人以上から:yosasou:リアクションをもらう',
		category: 'reactions',
		reaction: 'yosasou',
		value: 5,
	},
	{
		id: 'reaction-hakatashi-pro-5',
		difficulty: 'hard',
		title: '私がプロだ',
		condition: '1つのメッセージに対し5人以上から:hakatashi-pro:リアクションをもらう',
		category: 'reactions',
		reaction: 'hakatashi-pro',
		value: 5,
	},
	{
		id: 'reaction-shamiko-5',
		difficulty: 'hard',
		title: 'この町で出会えた奇跡',
		condition: '1つのメッセージに対し5人以上から:shamiko:リアクションをもらう',
		category: 'reactions',
		reaction: 'shamiko',
		value: 5,
	},
	{
		id: 'reaction-fleshpeach-5',
		difficulty: 'hard',
		title: 'ずっと輝いてる未来はここにある',
		condition: '1つのメッセージに対し5人以上から:freshpeach:リアクションをもらう',
		category: 'reactions',
		reaction: 'freshpeach',
		value: 5,
	},
	{
		id: 'reaction-95-5',
		difficulty: 'hard',
		title: '誰がなんと言おうと優上のはずなんだ',
		condition: '1つのメッセージに対し5人以上から:95:リアクションをもらう',
		category: 'reactions',
		reaction: '95',
		value: 5,
	},
	{
		id: 'reaction-zoi-5',
		difficulty: 'hard',
		title: '今日も一日がんばるぞい！',
		condition: '1つのメッセージに対し5人以上から:zoi:リアクションをもらう',
		category: 'reactions',
		reaction: 'zoi',
		value: 5,
	},
	{
		id: 'reaction-rhyme-5',
		difficulty: 'hard',
		title: '河童のラッパー今日もご立派',
		condition: '1つのメッセージに対し5人以上から:rhyme:リアクションをもらう',
		category: 'reactions',
		reaction: 'rhyme',
		value: 5,
	},
	{
		id: 'reaction-scp-040-jp-5',
		difficulty: 'hard',
		title: 'よろしくおねがいします_メモ',
		condition: '1つのメッセージに対し5人以上から:scp-040-jp:リアクションをもらう',
		category: 'reactions',
		reaction: 'scp-040-jp',
		value: 5,
	},
	{
		id: 'reaction-contradiction-5',
		difficulty: 'hard',
		title: 'ゆえにTSGは世界中を統べる団体である',
		condition: '1つのメッセージに対し5人以上から:contradiction:リアクションをもらう',
		category: 'reactions',
		reaction: 'contradiction',
		value: 5,
	},
	{
		id: 'reaction-sorehauso-5',
		difficulty: 'hard',
		title: '嘘つきは実績の始まり',
		condition: '1つのメッセージに対し5人以上から:sorehauso:リアクションをもらう',
		category: 'reactions',
		reaction: 'sorehauso',
		value: 5,
	},
	{
		id: 'reaction-sorehasou-5',
		difficulty: 'hard',
		title: '正直者が実績を見る',
		condition: '1つのメッセージに対し5人以上から:sorehasou:リアクションをもらう',
		category: 'reactions',
		reaction: 'sorehasou',
		value: 5,
	},
	{
		id: 'reaction-kowa-5',
		difficulty: 'hard',
		title: 'た͜͜͏̘̣͔͙͎͎̘̜̫̗͍͚͓͜͜͏̘̣͔͙͎͎す͜͜͏̘̣͔͙͎͎ơ̟̤̖̗͖͇̍͋̀͆̓́͞͡け̜ͪ̅̍̅͂͊て',
		condition: '1つのメッセージに対し5人以上から:kowa:リアクションをもらう',
		category: 'reactions',
		reaction: 'kowa',
		value: 5,
	},
	{
		id: 'reaction-0ten-5',
		difficulty: 'hard',
		title: 'す単落々堂我',
		condition: '1つのメッセージに対し5人以上から:0ten:リアクションをもらう',
		category: 'reactions',
		reaction: '0ten',
		value: 5,
	},
	{
		id: 'reaction-genbaneko-5',
		difficulty: 'hard',
		title: '指差し確認ヨシ！',
		condition: '1つのメッセージに対し5人以上から:genbaneko:リアクションをもらう',
		category: 'reactions',
		reaction: 'genbaneko',
		value: 5,
	},
	{
		id: 'reaction-denwaneko-5',
		difficulty: 'hard',
		title: 'どうして夜中に起きてるんですか？',
		condition: '1つのメッセージに対し5人以上から:denwaneko:リアクションをもらう',
		category: 'reactions',
		reaction: 'denwaneko',
		value: 5,
	},
	{
		id: 'reaction-ikku-5',
		difficulty: 'hard',
		title: 'TSGの松尾芭蕉',
		condition: '1つのメッセージに対し5人以上から:ikku:リアクションをもらう',
		category: 'reactions',
		reaction: 'ikku',
		value: 5,
	},
	{
		id: 'reaction-nya-n-5',
		difficulty: 'hard',
		title: 'なんだ猫か...',
		condition: '1つのメッセージに対し5人以上から:nya-n:リアクションをもらう',
		category: 'reactions',
		reaction: 'nya-n',
		value: 5,
	},
	{
		id: 'reaction-yumemiriamu-5',
		difficulty: 'hard',
		title: '理由もなくチヤホヤされたい',
		condition: '1つのメッセージに対し5人以上から:yumemiriamu:リアクションをもらう',
		category: 'reactions',
		reaction: 'yumemiriamu',
		value: 5,
	},
	{
		id: 'reaction-yumemiriamu-10',
		difficulty: 'hard',
		title: 'チョロいなオタク！',
		condition: '1つのメッセージに対し10人以上から:yumemiriamu:リアクションをもらう',
		category: 'reactions',
		reaction: 'yumemiriamu',
		value: 10,
	},
	{
		id: 'reaction-jimei-5',
		difficulty: 'hard',
		title: 'あまり強い言葉を使うなよ',
		condition: '1つのメッセージに対し5人以上から:jimei:リアクションをもらう',
		category: 'reactions',
		reaction: 'jimei',
		value: 5,
	},
	{
		id: 'reaction-kaishaku-chigai-5',
		difficulty: 'hard',
		title: '平和より戦争を始める方がはるかに易しい',
		condition: '1つのメッセージに対し5人以上から:kaishaku-chigai:リアクションをもらう',
		category: 'reactions',
		reaction: 'kaishaku-chigai',
		value: 5,
	},
	{
		id: 'reaction-kurotorianzu-5',
		difficulty: 'hard',
		title: '自堕落アイドルへの道',
		condition: '1つのメッセージに対し5人以上から:kurotorianzu:リアクションをもらう',
		category: 'reactions',
		reaction: 'kurotorianzu',
		value: 5,
	},
	{
		id: 'reaction-pwn-5',
		difficulty: 'hard',
		title: 'pwnpwnpain',
		condition: '1つのメッセージに対し5人以上から:pwn:リアクションをもらう',
		category: 'reactions',
		reaction: 'pwn',
		value: 5,
	},
	{
		id: 'reaction-coil-5',
		difficulty: 'hard',
		title: '1.667レアコイル',
		condition: '1つのメッセージに対し5人以上から:coil:リアクションをもらう',
		category: 'reactions',
		reaction: 'coil',
		value: 5,
	},
	{
		id: 'reaction-coil-3',
		difficulty: 'medium',
		title: 'レアコイル',
		condition: '1つのメッセージに対し3人以上から:coil:リアクションをもらう',
		category: 'reactions',
		reaction: 'coil',
		value: 3,
	},
	{
		id: 'reaction-nanachi-5',
		difficulty: 'hard',
		title: '君はかわいいですね',
		condition: '1つのメッセージに対し5人以上から:nanachi:リアクションをもらう',
		category: 'reactions',
		reaction: 'nanachi',
		value: 5,
	},
	{
		id: 'reaction-reizoukotte-5',
		difficulty: 'hard',
		title: 'お前は冷蔵庫！',
		condition: '1つのメッセージに5人以上から:reizoukotte:リアクションをもらう',
		category: 'reactions',
		reaction: 'reizoukotte',
		value: 5,
	},
	{
		id: 'reaction-banananachi-5',
		difficulty: 'hard',
		title: 'バナナのナナチがゆらゆら',
		condition: '1つのメッセージに対し5人以上から:banananachi:リアクションをもらう',
		category: 'reactions',
		reaction: 'banananachi',
		value: 5,
	},
	{
		id: 'reaction-agc-5',
		difficulty: 'hard',
		title: 'なんだしなんだしTSG',
		condition: '1つのメッセージに対し5人以上から:agc:リアクションをもらう',
		category: 'reactions',
		reaction: 'agc',
		value: 5,
	},
	{
		id: 'reaction-american-battle-dome-5',
		difficulty: 'hard',
		title: '新感覚実績アクションゲェーム！',
		condition: '1つのメッセージに対し5人以上から:american-battle-dome:リアクションをもらう',
		category: 'reactions',
		reaction: 'american-battle-dome',
		value: 5,
	},
	{
		id: 'reaction-crocodile-with-100-remaining-days-of-life-5',
		difficulty: 'hard',
		title: '桜よくね？',
		condition: '1つのメッセージに対し5人以上から:crocodile-with-100-remaining-days-of-life:リアクションをもらう',
		category: 'reactions',
		reaction: 'crocodile-with-100-remaining-days-of-life',
		value: 5,
	},
	{
		id: 'reaction-doutan-kyohi-5',
		difficulty: 'hard',
		title: '俺が好きなこのキャラをお前が好きなはずはない',
		condition: '1つのメッセージに対し5人以上から:doutan-kyohi:リアクションをもらう',
		category: 'reactions',
		reaction: 'doutan-kyohi',
		value: 5,
	},
	{
		id: 'reaction-baba-5',
		difficulty: 'hard',
		title: '実績 is You',
		condition: '1つのメッセージに対し5人以上から:baba:リアクションをもらう',
		category: 'reactions',
		reaction: 'baba',
		value: 5,
	},
	{
		id: 'reaction-jimmy-sanpo-5',
		difficulty: 'hard',
		title: '実績になるから散歩したい',
		condition: '1つのメッセージに対し5人以上から:jimmy-sanpo:リアクションをもらう',
		category: 'reactions',
		reaction: 'jimmy-sanpo',
		value: 5,
	},
	{
		id: 'reaction-kusowayo-5',
		difficulty: 'hard',
		title: 'ハッ！取り乱してしまいましたわ！',
		condition: '1つのメッセージに対し5人以上から:kusowayo:リアクションをもらう',
		category: 'reactions',
		reaction: 'kusowayo',
		value: 5,
	},
	{
		id: 'reaction-kyoudai-kanjo-5',
		difficulty: 'hard',
		title: '学歴コンプ',
		condition: '1つのメッセージに対し5人以上から:kyoudai-kanjo:リアクションをもらう',
		category: 'reactions',
		reaction: 'kyoudai-kanjo',
		value: 5,
	},
	{
		id: 'reaction-masaka-sakasama-5',
		difficulty: 'hard',
		title: '女医解除',
		condition: '1つのメッセージに対し5人以上から:masaka-sakasama:リアクションをもらう',
		category: 'reactions',
		reaction: 'masaka-sakasama',
		value: 5,
	},
	
	// sushi-bot

	{
		id: 'get-sushi',
		difficulty: 'baby',
		title: '玉子',
		condition: 'sushi-botから寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'get-multiple-sushi',
		difficulty: 'easy',
		title: 'マグロ',
		condition: 'sushi-botから一度に2個以上の寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'get-infinite-sushi',
		difficulty: 'easy',
		title: 'ハマチ',
		condition: 'sushi-botから一度に無限個の寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'wednesday-sushi',
		difficulty: 'medium',
		title: 'すしすしすいようび',
		condition: '水曜日にsushi-botから寿司をもらう',
		category: 'sushi-bot',
	},
	{
		id: 'freezing',
		difficulty: 'easy',
		title: 'フリージング',
		condition: 'sushi-botに凍結される',
		category: 'sushi-bot',
	},
	{
		id: 'freezing-master',
		difficulty: 'hard',
		title: '氷属性',
		condition: '週間凍結ランキングで1位を獲得する',
		category: 'sushi-bot',
	},

	// dajare

	{
		id: 'zabuton',
		difficulty: 'easy',
		title: 'だじゃれを言うのは誰じゃ',
		condition: 'dajareボットから:zabuton:をもらう',
		category: 'dajare',
	},
	{
		id: 'zabutons',
		difficulty: 'easy',
		title: 'タワーの上に登ったわー',
		condition: 'dajareボットから:zabutons:をもらう',
		category: 'dajare',
	},
	{
		id: 'flying-zabuton',
		difficulty: 'easy',
		title: '座布団がぶっ飛んだ',
		condition: 'dajareボットから:flying-zabuton:をもらう',
		category: 'dajare',
	},

	// pocky

	{
		id: 'pocky',
		difficulty: 'baby',
		title: 'はま寿司',
		condition: 'pockyに反応される',
		category: 'pocky',
	},
	{
		id: 'long-pocky',
		difficulty: 'medium',
		title: 'スーモ',
		condition: 'pockyから20文字以上の返答を得る',
		category: 'pocky',
	},

	// tahoiya

	{
		id: 'tahoiya',
		difficulty: 'easy',
		title: '千里の道も一歩から',
		condition: 'たほいやに参加する',
		category: 'tahoiya',
	},
	{
		id: 'daily-tahoiya-theme',
		difficulty: 'medium',
		title: '大智は愚の如し',
		condition: 'デイリーたほいやにお題を登録する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-over6',
		difficulty: 'medium',
		title: '坊主丸儲け',
		condition: 'たほいやで一度にプラス6点以上獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-over10',
		difficulty: 'hard',
		title: '一攫千金',
		condition: 'たほいやで一度にプラス10点以上獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-down10',
		difficulty: 'medium',
		title: '悪銭身につかず',
		condition: 'たほいやで前回より10点以上低い点数を獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-deceive',
		difficulty: 'medium',
		title: '笑中に刀あり',
		condition: 'たほいやで他の人をひっかける',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-deceive3',
		difficulty: 'hard',
		title: '麦飯で鯉を釣る',
		condition: 'たほいやで1度に3人以上をひっかける',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-5bet',
		difficulty: 'medium',
		title: '乾坤一擲',
		condition: 'たほいやで5枚BETする',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-singularity',
		difficulty: 'medium',
		title: 'シンギュラリティ',
		condition: 'たほいやでAIに振り込んでしまう',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-positive-coins-without-win',
		difficulty: 'hard',
		title: '負けるが勝ち',
		condition: 'たほいやで誤った選択肢にBETした上で正の得点を獲得する',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-deceive-each-other',
		difficulty: 'hard',
		title: '鷸蚌の争い',
		condition: 'たほいやでお互いの登録した意味に振り込み合う (BOTを除く)',
		category: 'tahoiya',
	},
	{
		id: 'tahoiya-wins-10',
		difficulty: 'hard',
		title: '勝てば官軍',
		condition: 'たほいやで延べ10勝する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaWin',
		value: 10,
	},
	{
		id: 'tahoiya-wins-100',
		difficulty: 'professional',
		title: '百戦殆うからず',
		condition: 'たほいやで延べ100勝する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaWin',
		value: 100,
	},
	{
		id: 'tahoiya-deceive-total7',
		difficulty: 'medium',
		title: '狐七化け、狸は八化け',
		condition: 'たほいやで延べ8人をひっかける',
		category: 'tahoiya',
		counter: 'tahoiyaDeceive',
		value: 8,
	},
	{
		id: 'tahoiya-deceive-total300',
		difficulty: 'professional',
		title: '三百代言',
		condition: 'たほいやで延べ300人をひっかける',
		category: 'tahoiya',
		counter: 'tahoiyaDeceive',
		value: 300,
	},
	{
		id: 'tahoiya-participate-10',
		difficulty: 'medium',
		title: '芸は道によって賢し',
		condition: 'たほいやに10回参加する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaParticipate',
		value: 10,
	},
	{
		id: 'tahoiya-participate-100',
		difficulty: 'hard',
		title: '松笠より年嵩',
		condition: 'たほいやに50回参加する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaParticipate',
		value: 50,
	},
	{
		id: 'tahoiya-participate-300',
		difficulty: 'professional',
		title: '海千山千',
		condition: 'たほいやに300回参加する (BOT以外の参加者が3人以上の場合に限る)',
		category: 'tahoiya',
		counter: 'tahoiyaParticipate',
		value: 300,
	},
	{
		id: 'tahoiya-firstplace',
		difficulty: 'hard',
		title: '歩く百科事典',
		condition: 'たほいやのランキングで1位になる',
		category: 'tahoiya',
	},

	// mahjong

	{
		id: 'mahjong',
		difficulty: 'easy',
		title: 'みっつずつ、みっつずつ⋯⋯',
		condition: '麻雀BOTの四麻モードで和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-七対子',
		difficulty: 'medium',
		title: 'ふたつずつ、ふたつずつ⋯⋯',
		condition: '麻雀BOTの四麻モードで七対子を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-12000',
		difficulty: 'easy',
		title: 'ザンクを三回刻むより',
		condition: '麻雀BOTの四麻モードで満貫以上を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-24000',
		difficulty: 'medium',
		title: '来たぜぬるりと',
		condition: '麻雀BOTの四麻モードで倍満以上を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-36000',
		difficulty: 'hard',
		title: '御無礼',
		condition: '麻雀BOTの四麻モードで三倍満以上を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-48000',
		difficulty: 'professional',
		title: '麻雀って楽しいね！',
		condition: '麻雀BOTの四麻モードで役満を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-ikeda',
		difficulty: 'easy',
		title: '池田ァ！',
		condition: '麻雀BOTの四麻モードで七筒を切る',
		category: 'mahjong',
	},
	{
		id: 'mahjong-不聴立直',
		difficulty: 'medium',
		title: '後の三巡',
		condition: '麻雀BOTの四麻モードで不聴立直をする',
		category: 'mahjong',
	},
	{
		id: 'mahjong-ドラ8',
		difficulty: 'professional',
		title: 'ドラゴンロード',
		condition: '麻雀BOTの四麻モードでドラを8枚以上含む手で和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-海底摸月',
		difficulty: 'hard',
		title: '片腹大激痛',
		condition: '麻雀BOTの四麻モードで海底摸月を和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-西単騎',
		difficulty: 'hard',
		title: '単騎は西で待て',
		condition: '麻雀BOTの四麻モードで西の単騎待ちで和了する',
		category: 'mahjong',
	},
	{
		id: 'mahjong-一四索',
		difficulty: 'professional',
		title: '早い立直は一四索',
		condition: '麻雀BOTの四麻モードで、6巡以内に一四索の両面待ちで立直を行った上で和了する',
		category: 'mahjong',
	},

	// shogi

	{
		id: 'shogi',
		difficulty: 'easy',
		title: '勝ち将棋鬼の如し',
		condition: '将棋BOTで勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-shortest',
		difficulty: 'medium',
		title: '長い詰みより短い必至',
		condition: '将棋BOTで最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-shortest-without-end',
		difficulty: 'hard',
		title: '長考に好手なし',
		condition: '将棋BOTで一発で最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
	},
	{
		id: 'shogi-win-10',
		difficulty: 'hard',
		title: '碁で負けたら将棋で勝て',
		condition: '将棋BOTで10回最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
		counter: 'shogiWin',
		value: 10,
	},
	{
		id: 'shogi-win-100',
		difficulty: 'professional',
		title: '月下の棋士',
		condition: '将棋BOTで100回最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
		counter: 'shogiWin',
		value: 100,
	},
	{
		id: 'shogi-over11',
		difficulty: 'hard',
		title: '勝ち将棋を勝て',
		condition: '将棋BOTで11手必勝以上の盤面で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-over19',
		difficulty: 'hard',
		title: '攻めるは守るなり',
		condition: '将棋BOTで19手必勝以上の盤面で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-over19-without-end',
		difficulty: 'professional',
		title: '名人に定跡なし',
		condition: '将棋BOTで19手必勝以上の盤面で一発で最短勝利する',
		category: 'shogi',
	},
	{
		id: 'shogi-銀不成',
		difficulty: 'hard',
		title: '銀は不成に好手あり',
		condition: '将棋BOTで銀不成を含む手順で最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
	},
	{
		id: 'shogi-自陣飛車',
		difficulty: 'hard',
		title: '自陣飛車に好手あり',
		condition: '将棋BOTで自陣への飛車打を含む手順で最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
	},
	{
		id: 'shogi-自陣角',
		difficulty: 'hard',
		title: '遠見の角に好手あり',
		condition: '将棋BOTで自陣への角打を含む手順で最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
	},
	{
		id: 'shogi-歩成',
		difficulty: 'medium',
		title: 'マムシのと金',
		condition: '将棋BOTで歩成を含む手順で最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
	},
	{
		id: 'shogi-三桂',
		difficulty: 'hard',
		title: '三桂あって詰まぬことなし',
		condition: '将棋BOTで桂馬を3つ以上所持した初期盤面で最短勝利する (7手必勝以上に限る)',
		category: 'shogi',
	},
	{
		id: 'shogi-打ち歩詰め',
		difficulty: 'hard',
		title: '打ち歩詰めに詰みの余地あり',
		condition: '将棋BOTで打ち歩詰めで敗北する',
		category: 'shogi',
	},

	// prime

	{
		id: 'prime',
		difficulty: 'baby',
		title: 'ピタゴラス',
		condition: '素数大富豪で遊ぶ',
		category: 'prime',
	},
	{
		id: 'prime-clear',
		difficulty: 'medium',
		title: 'ディオファントス',
		condition: '素数大富豪をクリアする',
		category: 'prime',
	},
	{
		id: 'prime-fast-clear',
		difficulty: 'medium',
		title: 'レオンハルト・オイラー',
		condition: '素数大富豪を4ターン以内でクリアする',
		category: 'prime',
	},
	{
		id: 'prime-fast-clear-no-draw',
		difficulty: 'medium',
		title: 'カール・フリードリヒ・ガウス',
		condition: '素数大富豪をドローせずに4ターン以内でクリアする',
		category: 'prime',
	},
	{
		id: 'prime-fast-clear-no-draw-no-penalty',
		difficulty: 'hard',
		title: 'エヴァリスト・ガロア',
		condition: '素数大富豪をドローおよびペナルティ無しで4ターン以内でクリアする',
		category: 'prime',
	},
	{
		id: 'prime-composition-8',
		difficulty: 'medium',
		title: 'ジョゼフ＝ルイ・ラグランジュ',
		condition: '素数大富豪で合成数出しによって8枚以上を同時に捨てる',
		category: 'prime',
	},
	{
		id: 'prime-grothendieck',
		difficulty: 'medium',
		title: 'アレクサンドル・グロタンディーク',
		condition: '素数大富豪でグロタンカットを発生させる',
		category: 'prime',
	},
	{
		id: 'prime-ramanujan',
		difficulty: 'medium',
		title: 'シュリニヴァーサ・ラマヌジャン',
		condition: '素数大富豪でラマヌジャン革命を発生させる',
		category: 'prime',
	},
	{
		id: 'prime-mersenne',
		difficulty: 'medium',
		title: 'マラン・メルセンヌ',
		condition: '素数大富豪で3桁以上のメルセンヌ素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-fermat',
		difficulty: 'medium',
		title: 'ピエール・ド・フェルマー',
		condition: '素数大富豪で3桁以上のフェルマー素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-fibonacci',
		difficulty: 'medium',
		title: 'レオナルド・フィボナッチ',
		condition: '素数大富豪で3桁以上のフィボナッチ素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-lucas',
		difficulty: 'medium',
		title: 'エドゥアール・リュカ',
		condition: '素数大富豪で3桁以上のリュカ素数を捨てる',
		category: 'prime',
	},
	{
		id: 'prime-wolstenholme',
		difficulty: 'medium',
		title: 'ジョセフ・ウォルステンホルム',
		condition: '素数大富豪で3桁以上のウォルステンホルム素数を捨てる',
		category: 'prime',
	},

	// voiperrobot

	{
		id: 'voiperrobot',
		difficulty: 'easy',
		title: 'はっつくパンツ',
		condition: 'ボイパーロボットで遊ぶ',
		category: 'voiperrobot',
	},
	{
		id: 'voiperrobot-battle',
		difficulty: 'easy',
		title: 'ひっつくパンツ',
		condition: 'ボイパーロボットバトルで遊ぶ',
		category: 'voiperrobot',
	},
	{
		id: 'voiperrobot-win-battle',
		difficulty: 'medium',
		title: 'くっつくパンツ',
		condition: 'ボイパーロボットバトルで勝つ',
		category: 'voiperrobot',
	},

	// ricochet-robots

	{
		id: 'ricochet-robots-play',
		difficulty: 'easy',
		title: 'Hey ハイパーロボット',
		condition: 'ハイパーロボットで遊ぶ',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear',
		difficulty: 'easy',
		title: 'われはロボット',
		condition: 'ハイパーロボットを正解する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest',
		difficulty: 'easy',
		title: 'オートマタ',
		condition: 'ハイパーロボットで最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest-over10',
		difficulty: 'medium',
		title: 'アンドロイド',
		condition: 'ハイパーロボットで10手詰め以上の問題で最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest-over15',
		difficulty: 'hard',
		title: 'オラクル',
		condition: 'ハイパーロボットで15手詰め以上の問題で最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-clear-shortest-over20',
		difficulty: 'professional',
		title: 'デウス・エクス・マキナ',
		condition: 'ハイパーロボットで20手詰め以上の問題で最短勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-buttle-play',
		difficulty: 'easy',
		title: 'ハイパーロボット対戦',
		condition: 'ハイパーロボットバトルで遊ぶ',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-buttle-win',
		difficulty: 'easy',
		title: '早見え',
		condition: 'ハイパーロボットバトルで勝利する',
		category: 'ricochet-robots',
	},
	{
		id: 'ricochet-robots-debugger',
		difficulty: 'hard',
		title: 'ﾋﾟｭｰﾝ',
		condition: 'ハイパーロボットのバグを突く',
		category: 'ricochet-robots',
	},

	// ahokusa

	{
		id: 'ahokusa-play',
		difficulty: 'easy',
		title: '今話題のゲームがあるんですよ',
		condition: 'あほくさスライドパズルで遊ぶ',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-clear',
		difficulty: 'easy',
		title: 'まあゆかりさんは天才ですから？',
		condition: 'あほくさスライドパズルをクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-clear-shortest',
		difficulty: 'easy',
		title: '敵を華麗にバッタバッタやっつけるわけです',
		condition: 'あほくさスライドパズルを最短でクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-clear-once',
		difficulty: 'easy',
		title: 'その結果ランキングに載るわけです！',
		condition: 'あほくさスライドパズルを一発でクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-clear-shortest-once',
		difficulty: 'medium',
		title: 'ええんちゃう？',
		condition: 'あほくさスライドパズルを一発かつ最短でクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-impossible',
		difficulty: 'easy',
		title: 'わかる（明察）',
		condition: 'あほくさスライドパズルの不成立を指摘する',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-impossible-once',
		difficulty: 'medium',
		title: 'あ　ほ　く　さ',
		condition: 'あほくさスライドパズルの不成立を一発で指摘する',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-clear-8s',
		difficulty: 'hard',
		title: '8秒で全員ぶっ飛ばしてやりますよ！！！！！！！',
		condition: 'あほくさスライドパズルを8秒以内にクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-impossible-5s',
		difficulty: 'hard',
		title: 'やめたら？このゲーム',
		condition: 'あほくさスライドパズルの不成立を5秒以内に指摘する',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-sushi-clear-once-89s',
		difficulty: 'professional',
		title: '狂い出しそう-体が震える',
		condition: '寿司スライドパズルを一発かつ89秒以内にクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-chiya-clear',
		difficulty: 'hard',
		title: '見習いうらら',
		condition: '千矢スライドパズルをクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-chiya-clear-200s',
		difficulty: 'hard',
		title: 'におい占いで！',
		condition: '千矢スライドパズルを200秒以内にクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-chiya-impossible-once',
		difficulty: 'hard',
		title: 'おなかが＜・＞＜・＞でてない',
		condition: '千矢スライドパズルの不成立を一発で指摘する',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-chiya-clear-once-1008s',
		difficulty: 'professional',
		title: '視えた！',
		condition: '千矢スライドパズルを一発で1008秒以内にクリアする',
		category: 'ahokusa',
	},
	{
		id: 'ahokusa-chiya-clear-50s',
		difficulty: 'professional',
		title: '伝説の一番占',
		condition: '千矢スライドパズルを50秒以内にクリアする',
		category: 'ahokusa',
	},

	// atcoder

	{
		id: 'atcoder-participate',
		difficulty: 'medium',
		title: 'はいプロ',
		condition: 'AtCoderのratedな大会に参加する',
		category: 'atcoder',
		counter: 'atcoder-participate',
		value: 1,
	},
	{
		id: 'atcoder-participate-3',
		difficulty: 'medium',
		title: '井井井',
		condition: 'AtCoderのratedな大会に3回参加する',
		category: 'atcoder',
		counter: 'atcoder-participate',
		value: 3,
	},
	{
		id: 'atcoder-participate-5',
		difficulty: 'medium',
		title: '□□□□□',
		condition: 'AtCoderのratedな大会に5回参加する',
		category: 'atcoder',
		counter: 'atcoder-participate',
		value: 5,
	},
	{
		id: 'atcoder-participate-10',
		difficulty: 'hard',
		title: '大事な数なのでZ回書きまLた。',
		condition: 'AtCoderのratedな大会に10回参加する',
		category: 'atcoder',
		counter: 'atcoder-participate',
		value: 10,
	},
	{
		id: 'atcoder-participate-30',
		difficulty: 'professional',
		title: 'AtCoder Crackers',
		condition: 'AtCoderのratedな大会に30回参加する',
		category: 'atcoder',
		counter: 'atcoder-participate',
		value: 30,
	},
	{
		id: 'atcoder-rating-plus',
		difficulty: 'medium',
		title: '競プロの天才',
		condition: 'AtCoderでレーティングを上げる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-rating-plus-50',
		difficulty: 'hard',
		title: '競プロ界のtourist',
		condition: 'AtCoderでレーティングを一度に50以上上げる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-rating-plus-minus-zero',
		difficulty: 'hard',
		title: '競プロ界の咲',
		condition: 'AtCoderでレーティングをプラスマイナスゼロで維持する',
		category: 'atcoder',
	},
	{
		id: 'atcoder-rating-minus',
		difficulty: 'medium',
		title: '競プロの終焉を告げる者',
		condition: 'AtCoderでレーティングを下げる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-rating-minus-50',
		difficulty: 'hard',
		title: '実質趣味',
		condition: 'AtCoderでレーティングを一度に50以上下げる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-rating-over-2400',
		difficulty: 'professional',
		title: '競プロするために生まれてきた男',
		condition: 'AtCoderのレーティングを2400以上にする',
		category: 'atcoder',
	},
	{
		id: 'atcoder-all-solve',
		difficulty: 'hard',
		title: 'スペースエクスプローラー高橋君',
		condition: 'AtCoderのratedな (本人がratedでなくてよい) 大会で全ての問題で正の得点を獲得した状態でレーティングを確定させる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-repdigit',
		difficulty: 'hard',
		title: '魔法使い高橋君',
		condition: 'AtCoderでゾロ目の順位 (10進数、3桁以上に限る) でレーティングを確定させる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-prime',
		difficulty: 'medium',
		title: '高橋君と青木君の好きな数',
		condition: 'AtCoderで素数となる順位でレーティングを確定させる',
		category: 'atcoder',
	},
	{
		id: 'atcoder-no-solve',
		difficulty: 'medium',
		title: '器物損壊！高橋君',
		condition: 'AtCoderのレーティング更新対象の大会で1問も解かずにレーティングを確定させる',
		category: 'atcoder',
	},

	// anime

	{
		id: 'anime-answer',
		difficulty: 'easy',
		title: 'アニメ初心者',
		condition: 'アニメ当てクイズで正解する',
		category: 'anime',
		counter: 'anime-answer',
		value: 1,
	},
	{
		id: 'anime-answer-30',
		difficulty: 'hard',
		title: 'アニメ職人',
		condition: 'アニメ当てクイズで30回正解する',
		category: 'anime',
		counter: 'anime-answer',
		value: 30,
	},
	{
		id: 'anime-before-2010',
		difficulty: 'hard',
		title: 'あの頃はよかった',
		condition: 'アニメ当てクイズで2010年より前に放送されたアニメを正解する',
		category: 'anime',
	},
	{
		id: 'anime-before-2000',
		difficulty: 'professional',
		title: 'セル画の香り',
		condition: 'アニメ当てクイズで2000年より前に放送されたアニメを正解する',
		category: 'anime',
	},
	{
		id: 'anime-answer-third-hint',
		difficulty: 'medium',
		title: 'アニメオタク',
		condition: 'アニメ当てクイズでヒント3回以内で正解する',
		category: 'anime',
	},
	{
		id: 'anime-answer-second-hint',
		difficulty: 'medium',
		title: 'アニメ名人',
		condition: 'アニメ当てクイズでヒント2回以内で正解する',
		category: 'anime',
	},
	{
		id: 'anime-answer-first-hint',
		difficulty: 'hard',
		title: 'アニメ達人',
		condition: 'アニメ当てクイズでヒント1回以内で正解する',
		category: 'anime',
		counter: 'anime-answer-first-hint',
		value: 1,
	},
	{
		id: 'anime-answer-first-hint-10',
		difficulty: 'professional',
		title: 'アニメ神',
		condition: 'アニメ当てクイズでヒント1回以内で10回正解する',
		category: 'anime',
		counter: 'anime-answer-first-hint',
		value: 10,
	},
	{
		id: 'anime-extreme-answer-first-hint',
		difficulty: 'professional',
		title: 'モザイクの向こうに',
		condition: 'アニメ当てクイズextremeでヒント1回以内で正解する',
		category: 'anime',
	},
	{
		id: 'anime-song-answer',
		difficulty: 'easy',
		title: 'アニソン初心者',
		condition: 'アニソン当てクイズで正解する',
		category: 'anime',
		counter: 'anime-song-answer',
		value: 1,
	},
	{
		id: 'anime-song-before-2010',
		difficulty: 'hard',
		title: '懐メロハンター',
		condition: 'アニソン当てクイズで2010年より前に放送されたアニメの曲を正解する',
		category: 'anime',
	},
	{
		id: 'anime-song-answer-20',
		difficulty: 'hard',
		title: 'アニソン職人',
		condition: 'アニソン当てクイズで20回正解する',
		category: 'anime',
		counter: 'anime-song-answer',
		value: 20,
	},
	{
		id: 'anime-song-answer-third-hint',
		difficulty: 'medium',
		title: 'アニソンオタク',
		condition: 'アニソン当てクイズでヒント3回以内で正解する',
		category: 'anime',
	},
	{
		id: 'anime-song-answer-second-hint',
		difficulty: 'hard',
		title: 'アニソン名人',
		condition: 'アニソン当てクイズでヒント2回以内で正解する',
		category: 'anime',
	},
	{
		id: 'anime-song-answer-first-hint',
		difficulty: 'hard',
		title: 'アニソン達人',
		condition: 'アニソン当てクイズでヒント1回以内で正解する',
		category: 'anime',
		counter: 'anime-song-answer-first-hint',
		value: 1,
	},
	{
		id: 'anime-song-answer-first-hint-5',
		difficulty: 'professional',
		title: 'アニソン神',
		condition: 'アニソン当てクイズでヒント1回以内で5回正解する',
		category: 'anime',
		counter: 'anime-song-answer-first-hint',
		value: 5,
	},

	// crossword

	{
		id: 'crossword-cells-1',
		difficulty: 'easy',
		title: '一頭地を抜く',
		condition: 'crosswordで累計1マス以上のマスを開く',
		category: 'crossword',
		counter: 'crossword-cells',
		value: 1,
	},
	{
		id: 'crossword-cells-20',
		difficulty: 'medium',
		title: 'クロスワード・マニア',
		condition: 'crosswordで累計20マス以上のマスを開く',
		category: 'crossword',
		counter: 'crossword-cells',
		value: 20,
	},
	{
		id: 'crossword-cells-100',
		difficulty: 'hard',
		title: '100マス計算',
		condition: 'crosswordで累計100マス以上のマスを開く',
		category: 'crossword',
		counter: 'crossword-cells',
		value: 100,
	},
	{
		id: 'crossword-cells-1000',
		difficulty: 'professional',
		title: '千枚通し',
		condition: 'crosswordで累計1000マス以上のマスを開く',
		category: 'crossword',
		counter: 'crossword-cells',
		value: 1000,
	},
	{
		id: 'crossword-wins-1',
		difficulty: 'medium',
		title: 'クロスワード・初勝利',
		condition: 'crosswordで1マス以上のマスを開け、盤面をクリアする',
		category: 'crossword',
		counter: 'crossword-wins',
		value: 1,
	},
	{
		id: 'crossword-wins-3',
		difficulty: 'medium',
		title: 'クロスワード・ハットトリック',
		condition: 'crosswordで1マス以上のマスを開け、盤面を3回クリアする',
		category: 'crossword',
		counter: 'crossword-wins',
		value: 3,
	},
	{
		id: 'crossword-wins-21',
		difficulty: 'hard',
		title: 'クロスワード・ゲームセット',
		condition: 'crosswordで1マス以上のマスを開け、盤面を21回クリアする',
		category: 'crossword',
		counter: 'crossword-wins',
		value: 21,
	},
	{
		id: 'crossword-wins-150',
		difficulty: 'professional',
		title: 'クロスワード・勝利の女神',
		condition: 'crosswordで1マス以上のマスを開け、盤面を150回クリアする',
		category: 'crossword',
		counter: 'crossword-wins',
		value: 150,
	},
	{
		id: 'crossword-solo',
		difficulty: 'hard',
		title: 'クロスワード・完投勝利',
		condition: 'crosswordで1人で全てのマスを開いてクリアする',
		category: 'crossword',
	},
	{
		id: 'crossword-clear',
		difficulty: 'medium',
		title: 'クロスワード・決勝点',
		condition: 'crosswordでクリアを決定する最後の単語を回答する',
		category: 'crossword',
	},
	{
		id: 'crossword-closer',
		difficulty: 'hard',
		title: 'クロスワード・クローザー',
		condition: 'crosswordでクリアを決定する最後の単語を回答する。ただしそのゲームにおいてそれ以外に回答を行ってはいけない (正解・不正解を問わない)',
		category: 'crossword',
	},
	{
		id: 'crossword-buzzer-beater',
		difficulty: 'hard',
		title: 'クロスワード・ブザービーター',
		condition: 'crosswordで制限時間が切れる2秒以内に、クリアを決定する最後の単語を回答する',
		category: 'crossword',
	},

	// achievements

	{
		id: 'achievements',
		difficulty: 'easy',
		title: '実績解除',
		condition: '初めて実績解除する',
		category: 'achievements',
	},
	{
		id: 'achievements-3',
		difficulty: 'easy',
		title: '解解解除',
		condition: '難易度easy以上の実績を3つ解除する',
		category: 'achievements',
	},
	{
		id: 'achievements-10',
		difficulty: 'medium',
		title: '解解解解解解解解解解除',
		condition: '難易度easy以上の実績を10個解除する',
		category: 'achievements',
	},
	{
		id: 'achievements-70',
		difficulty: 'hard',
		title: '実績七十古来稀なり',
		condition: '難易度easy以上の実績を70個解除する',
		category: 'achievements',
	},
	{
		id: 'achievements-master',
		difficulty: 'hard',
		title: '実績マスター',
		condition: '難易度medium以上の実績を10個解除する',
		category: 'achievements',
	},

	// manual

	{
		id: 'sig',
		difficulty: 'easy',
		title: 'TSG初心者',
		condition: '分科会に参加する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'sig-3times',
		difficulty: 'medium',
		title: 'TSG中級者',
		condition: '分科会に3回以上参加する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'sig-5times',
		difficulty: 'hard',
		title: 'TSG上級者',
		condition: '分科会に5回以上参加する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'create-sig',
		difficulty: 'medium',
		title: 'はじめてのオフ会主催',
		condition: '分科会を開催・運営する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'create-sig-3times',
		difficulty: 'hard',
		title: '人気TSGer',
		condition: '分科会を3回以上開催・運営する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'create-sig-5times',
		difficulty: 'professional',
		title: '大物TSGer',
		condition: '分科会を5回以上開催・運営する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'no-one-came-to-sig',
		difficulty: 'professional',
		title: '参加者は誰一人来ませんでした',
		condition: '自身が開催した分科会の参加者が0人になった回に遭遇する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'clubroom',
		difficulty: 'medium',
		title: '足跡',
		condition: 'TSGの部室を訪問する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'heiankyo-alien',
		difficulty: 'hard',
		title: '歴史との邂逅',
		condition: 'TSGの部室で平安京エイリアンをプレイする',
		category: 'manual',
		manual: true,
	},
	{
		id: 'scrapbox',
		difficulty: 'medium',
		title: '切り抜き箱',
		condition: 'scrapboxに自分の名前の記事を作成する',
		category: 'manual',
		manual: true,
	},
	{
		id: 'github',
		difficulty: 'hard',
		title: 'コントリビューター',
		condition: 'GitHubのtsg-ut下のリポジトリにコミットする',
		category: 'manual',
		manual: true,
	},
	{
		id: 'github-slackbot',
		difficulty: 'hard',
		title: 'BOT駆動開発',
		condition: 'GitHubのtsg-ut/slackbotにコミットする',
		category: 'manual',
		manual: true,
	},
	{
		id: 'github-review',
		difficulty: 'hard',
		title: 'レビュアー',
		condition: 'GitHubのtsg-ut下のリポジトリでのPRにレビューをする',
		category: 'manual',
		manual: true,
	},
];

const achievementMap = new Map(achievements.map((achievement) => [achievement.id, achievement]));

export default achievementMap;
