export const AUTHOR = {
	NAME: "Maxim",
	SURNAME: "Polonsky",
	EMAIL: "mchp010nsky@gmail.com",
	TEL: "+375(29)286-18-00",
};

const API_KEY = '8d8ee5d1a2b6469881df0144b6118048';

export const lSName = 'news_API';

export const API_URL = 'https://newsapi.org/v2/top-headlines?' +
	'country=ru&' +
	'pageSize=5&' +
	`apiKey=${API_KEY}`;