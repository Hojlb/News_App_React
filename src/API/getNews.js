
const key = '8d8ee5d1a2b6469881df0144b6118048';

async function loadNews() {
  let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=ru&' +
    `apiKey=${key}`;

  let req = await new Request(url);
  let response = await fetch(req);
  let data = await response.json();
  return [...data.articles];
};

export default loadNews;