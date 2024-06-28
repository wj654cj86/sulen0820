export default async function (req, res) {
	let { name } = req.query;
	let 帳號 = '';
	let 暱稱 = '';
	if (name.indexOf('(') != -1) {
		let 括弧 = name.indexOf(' (');
		帳號 = name.substr(括弧).replace(' (', '').replace(')', '').toLowerCase();
		暱稱 = name.substr(0, 括弧);
	} else {
		帳號 = name.toLowerCase();
		暱稱 = name;
	}
	res.status(200).json(`感謝 ${暱稱} 帶小朋友來找喵喵玩！請到達喵喵幼稚園的小朋友們，記得要點擊頭像兩下完成入學登記喔！幼稚園的小朋友們，還不趕快進攻回去！！！ https://twitch.tv/${帳號}`);
}
