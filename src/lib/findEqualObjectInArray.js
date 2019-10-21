function findEqualObjectInArray(fresh, rotten, compareBy) {
	const res = [];

	for (let i = 0; i < rotten.length; i++) {
		for (let j = 0; j < fresh.length; j++) {
			if (fresh[j][compareBy] === rotten[i][compareBy]) {
				res.push(rotten[i]);
				i++;
			} else {
					res.push(fresh[j]);
			}
		}
	}

		if (Object.keys(rotten).length === 0) return fresh;

		return res;
}

export default findEqualObjectInArray;