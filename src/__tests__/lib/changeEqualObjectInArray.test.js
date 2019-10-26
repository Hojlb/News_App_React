import changeEqualObjectInArray from "../../lib/changeEqualObjectInArray";

describe("changeEqualObjectInArray lib", () => {
	it("Compare two equal array of objects- success", ()=>{
		const compareBy = 'newsID';
		const oldData = [
			{ newsID: "first news",
				publishedAt: "1.09.2112",
				like: 2,
				viewers: 4,
			},
			{ newsID: "second news",
				publishedAt: "2.09.2112",
				like: 2,
				viewers: 4,
			},
			{ newsID: "third news",
				publishedAt: "3.09.2112",
				like: 2,
				viewers: 4,
			},
			];

		const freshData = [
			{ newsID: "first news",
				publishedAt: "1.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "second news",
				publishedAt: "2.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "third news",
				publishedAt: "3.09.2112",
				like: 0,
				viewers: 0,
			},
		];

		const result = changeEqualObjectInArray(oldData, freshData, compareBy);

		expect(result)
			.toEqual(oldData);
});
	it("Compare two unequal array of objects- success", ()=>{
		const compareBy = 'newsID';
		const oldData = [
			{ newsID: "first news",
				publishedAt: "1.09.2112",
				like: 2,
				viewers: 4,
			},
			{ newsID: "second news",
				publishedAt: "2.09.2112",
				like: 2,
				viewers: 4,
			},
			{ newsID: "third news",
				publishedAt: "3.09.2112",
				like: 2,
				viewers: 4,
			},
		];

		const freshData = [
			{ newsID: "fourth news",
				publishedAt: "4.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "fifth news",
				publishedAt: "5.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "sixth news",
				publishedAt: "6.09.2112",
				like: 0,
				viewers: 0,
			},
		];

		const result = changeEqualObjectInArray(oldData, freshData, compareBy);

		expect(result)
			.toEqual(freshData);

	});
	it("Compare old with 1 from 3 new objects in array- success", ()=>{
		const compareBy = 'newsID';
		const oldData = [
			{ newsID: "third news",
				publishedAt: "3.09.2112",
				like: 3,
				viewers: 4,
			},
			{ newsID: "second news",
				publishedAt: "2.09.2112",
				like: 1,
				viewers: 4,
			},
			{ newsID: "first news",
				publishedAt: "1.09.2112",
				like: 2,
				viewers: 4,
			},
		];

		const freshData = [
			{ newsID: "fifth news",
				publishedAt: "5.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "fourth news",
				publishedAt: "4.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "third news",
				publishedAt: "3.09.2112",
				like: 0,
				viewers: 0,
			},
		];

		const result = changeEqualObjectInArray(oldData, freshData, compareBy);

		expect(result)
			.toEqual([
				{ newsID: "fifth news",
					publishedAt: "5.09.2112",
					like: 0,
					viewers: 0,
				},
				{ newsID: "fourth news",
					publishedAt: "4.09.2112",
					like: 0,
					viewers: 0,
				},
				{ newsID: "third news",
					publishedAt: "3.09.2112",
					like: 3,
					viewers: 4,
				},
			]);

	});
	it("Compare empty with new array of objects - success", ()=>{
		const compareBy = 'newsID';
		const oldData = [];

		const freshData = [
			{ newsID: "fifth news",
				publishedAt: "5.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "third news",
				publishedAt: "3.09.2112",
				like: 0,
				viewers: 0,
			},
			{ newsID: "second news",
				publishedAt: "2.09.2112",
				like: 0,
				viewers: 0,
			},
		];

		const result = changeEqualObjectInArray(oldData, freshData, compareBy);

		expect(result)
			.toEqual(freshData);

	});
});