function compareArrayOfObjects(arr1, arr2) {
	let res = true;
	arr1.forEach(itm1 =>
		arr2.forEach(itm2 => {
			if (JSON.stringify(itm1) !== JSON.stringify(itm2)) res = false;
		})
	);
	return res;
}

export default compareArrayOfObjects;