var q = [3, 20, 100];
var e = ['sulen010 ', 'sulen0Cake ', 'sulen0Food '];
export default async function (req, res) {
	let t = '';
	let s = 0;
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 3; j++) {
			if (Math.random() * 100 < q[j]) {
				s += j;
				if (s == 20)
					t += e[1];
				else
					t += e[j];
				break;
			}
		}
	}
	if (s > 18)
		t += ' (保底)';
	res.status(200).json(t);
}
