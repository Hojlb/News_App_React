import ActionTypes from '../../actions/ActionTypes';
//import { getRandomNumber } from '../../lib/randomNumber';
import findEqualObjectInArray from "../../lib/findEqualObjectInArray";
//import v4 from 'uuid';

const initialState = localStorage.news_API ?
	JSON.parse(localStorage.news_API).FreshNews :
	[];

export default function FreshNews (state=initialState, action) {
	switch (action.type) {
		case ActionTypes.DOWNLOAD_FRESH_NEWS: {
			const data = [...action.payload].map((item) => ({
				...item,
				like: 0,
				newsID: item.title,
				viewers: 0
			}))
				.filter((item) => item.urlToImage)
				.sort((a,b)=> new Date(b.publishedAt) - new Date(a.publishedAt));

			return findEqualObjectInArray(data, state, "newsID");
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