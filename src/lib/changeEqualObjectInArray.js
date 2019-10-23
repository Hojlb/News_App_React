function changeEqualObjectInArray(rotten, fresh, compareBy) {
	if (rotten.length === 0) return fresh;

	const res = [];

	for (let i = 0; i < rotten.length; i++) {
		for (let j = 0; j < fresh.length; j++) {
			if (rotten[i][compareBy] === fresh[j][compareBy]) {
				res.push({
					...fresh[j],
					like: fresh[j].like > rotten[i].like
						? fresh[j].like
						: rotten[i].like,
					viewers: fresh[j].viewers > rotten[i].viewers
						? fresh[j].viewers
						: rotten[i].viewers,
				});
				i++;
			} else {
					res.push(fresh[j]);
			}
		}
			if (res.length === rotten.length) return res;
	}
		return res;
}

export default changeEqualObjectInArray;