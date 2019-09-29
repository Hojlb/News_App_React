import C from '../constants';
import { getId } from '../lib/getID';
import { getRandomNumber } from '../lib/randomNumber';


export const newsData = (state=[], action) => {
  switch (action.type) {

    case C.DOWNLOAD_FRESH_NEWS:
      let data = [...action.payload];
      return data.map( (item) => ({...item, like: getRandomNumber(100), newsID: getId(), viewers: getRandomNumber(100),})).filter((item) => item.urlToImage);

    case C.UPDATE_RATING:
      return state.map( (item) => (item.newsID !== action.payload.newsID) ? item : {...item, like: action.payload.like});

    case C.UPDATE_VIEWERS:
		  return state.map( (item) => (item.newsID !== action.payload.newsID) ? item : {...item, viewers: action.payload.viewers});

    default: return state;
  }
};