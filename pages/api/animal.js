var 動物 = {
	喵皇: [5, 20000],
	龍獸: [25, 9000],
	虎王: [25, 8000],
	蛇精: [25, 7000],
	老鼠: [30, 6000],
	勤牛: [100, 5000],
	山羊: [100, 5000],
	火雞: [100, 5000],
	忠狗: [100, 4000],
	小兔: [100, 3000],
	快馬: [100, 2000],
	小豬: [100, 1000],
	瘋猴: [500, 100]
};

let 總和 = 0;
for (let it in 動物) {
	總和 += 動物[it][0];
	動物[it][2] = 總和;
}

export default async function handler(req, res) {
	let 抽獎人 = req.query.u;
	let token = req.query.t;
	let 抽數字 = Math.floor(Math.random() * 總和);
	let 抽動物 = ''
	for (let it in 動物) {
		if (抽數字 < 動物[it][2]) {
			抽動物 = it;
			break;
		}
	}
	await fetch(`https://api.jebaited.net/addPoints/${token}/${抽獎人}/${動物[抽動物][1]}`);
	res.status(200).json(`今天你是${抽動物}，獲得${動物[抽動物][1]}喵喵幣！`);
}
