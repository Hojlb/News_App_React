import {createStore, applyMiddleware, combineReducers} from "redux";
import changeEqualObjectInArray from "../lib/changeEqualObjectInArray";
import { lSName } from '../constants';
import ActionTypes from '../actions/ActionTypes';
import addAttrInFreshNews from '../lib/addAttrInFreshNews';
import FreshNews from "./reducers/FreshNews";
import FilterByTitle from "./reducers/FilterByTitle";

const logger = store => next => action => {

		let result;
		const prevState = store.getState();

		if(action.type === ActionTypes.DOWNLOAD_FRESH_NEWS) {
			const fresh = addAttrInFreshNews(action.payload);
			const news = changeEqualObjectInArray(prevState.FreshNews, fresh, "newsID");
      result = next({type: action.type, payload: news});

      return result;
		}

		result = next(action);
		return result;
};

const saver = store => next => action => {
	const result = next(action);
	localStorage.news_API = JSON.stringify(store.getState());

	return result;
};

function storeFactory () {
	return createStore(
		combineReducers({
			FreshNews,
			FilterByTitle,
		}),
		localStorage[lSName] ?
			JSON.parse(localStorage[lSName]) :
			[],
			applyMiddleware(logger, saver),
	);
}

export default storeFactory