var 動物 = {
	喵皇: [1, 20000],
	龍獸: [2, 9000],
	虎王: [3, 8000],
	蛇精: [4, 7000],
	老鼠: [5, 6000],
	勤牛: [6, 5000],
	山羊: [8, 5000],
	火雞: [10, 5000],
	忠狗: [12, 4000],
	小兔: [14, 3000],
	快馬: [16, 2000],
	小豬: [20, 1000],
	瘋猴: [50, 100]
};
let 總和 = 0;
for (let it in 動物) {
	總和 += 動物[it][0];
}
let 保底表 = [];
for (let it in 動物) {
	for (let i = 0; i < 動物[it][0]; i++) {
		保底表.push(it);
	}
}
let 順序 = 0;
function 洗牌() {
	for (let i = 0; i < 總和; i++) {
		let j = Math.floor(Math.random() * 總和);
		let t = 保底表[j];
		保底表[j] = 保底表[i];
		保底表[i] = t;
	}
}
洗牌();
export default async function handler(req, res) {
	let 抽獎人 = req.query.u;
	let token = req.query.t;
	let 抽動物 = 保底表[順序++];
	if (順序 >= 總和) {
		順序 = 0;
		洗牌();
	}
	await fetch(`https://api.jebaited.net/addPoints/${token}/${抽獎人}/${動物[抽動物][1]}`);
	res.status(200).json(`今天你是${抽動物}，獲得${動物[抽動物][1]}喵喵幣！`);
}
