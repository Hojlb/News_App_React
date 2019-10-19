import ActionTypes from '../../actions/ActionTypes';
//import { getRandomNumber } from '../../lib/randomNumber';
import compareArrayOfObjects from "../../lib/compareArrayOfObjects";
//import v4 from 'uuid';

export default function FreshNews (state=[], action) {
	switch (action.type) {
		case ActionTypes.DOWNLOAD_FRESH_NEWS: {
			const data = action.payload.map((item) => ({
				...item,
				like: 0,
				newsID: item.publishedAt,
				viewers: 0,
			})).filter((item) => item.urlToImage);

			return !compareArrayOfObjects(state, data) ? state : data;
		}

		case ActionTypes.UPDATE_RATING:
			return state.map( (item) => (item.newsID !== action.payload.newsID) ?
				item :
				{...item, like: action.payload.like});

		case ActionTypes.UPDATE_VIEWERS:
			return state.map( (item) => (item.newsID !== action.payload.newsID) ?
				item :
				{...item, viewers: action.payload.viewers});

		case ActionTypes.DOWNLOAD_ERROR:
			return { errorMessage: action.payload };

		default:
			return state;
	}

};