import FreshNews from "../../../store/reducers/FreshNews";

describe("FreshNews Reducer", () => {

	it("DOWNLOAD_FRESH_NEWS success", () => {
		const state = [];
		const action = {
			type: "DOWNLOAD_FRESH_NEWS",
			payload: [
				{
					title: "hello1",
					publishedAt: "2002-09-21",
				},
				{
					title: "hello2",
					publishedAt: "2002-09-22",
				},
			]
		};
		const result = FreshNews(state, action);
		expect(result)
			.toEqual([
				{
					title: "hello2",
					like: 0,
					viewers: 0,
					newsID: "hello2",
					publishedAt: "2002-09-22",
				},
				{
					title: "hello1",
					like: 0,
					viewers: 0,
					newsID: "hello1",
					publishedAt: "2002-09-21",
				}
			]);
	});

	it("UPDATE_RATING success", () => {
		const state = [
			{
				title: "hello1",
				publishedAt: "2002-09-21",
				like: 0,
				newsID: "first",
			},
			{
				title: "hello2",
				publishedAt: "2002-09-22",
				like: 0,
				newsID: "second",
			},
		];
		const action = {
			type: "UPDATE_RATING",
			payload: {
					newsID: "first",
					like: 2,
				},
		};
		const result = FreshNews(state, action);
	expect(result)
		.toEqual([
			{
				title: "hello1",
				publishedAt: "2002-09-21",
				newsID: "first",
				like: 2,
			},
			{
				title: "hello2",
				newsID: "second",
				publishedAt: "2002-09-22",
				like: 0,
			}
			]);
});
});
