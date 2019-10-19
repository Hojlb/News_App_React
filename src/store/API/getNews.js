import { API_URL } from "../../constants";

const getNews = async () => {
  try {
    const req = new Request(API_URL);
    const response = await fetch(req);

    if (response.status === 200) {
      const data = await response.json();
      return [...data.articles];
    }

  } catch (e) {
    return e.message ;
  }
};

export default getNews;