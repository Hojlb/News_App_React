import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers';
import changeEqualObjectInArray from "../lib/changeEqualObjectInArray";
import { lSName } from '../constants';
import ActionTypes from '../actions/ActionTypes';
import addAttrInFreshNews from '../lib/addAttrInFreshNews';

const logger = store => next => action => {

		let result;
		console.groupCollapsed("dispatching", action.type);
		const prevState = store.getState();

		console.log('LOGGERS, prev state', prevState);
		console.log('LOGGERS, action', action);

		if(action.type === ActionTypes.DOWNLOAD_FRESH_NEWS) {
			const fresh = addAttrInFreshNews(action.payload);
			const news = changeEqualObjectInArray(prevState.FreshNews, fresh, "newsID");
      result = next({type: action.type, payload: news});

      console.log('LOGGERS next state (for download)', store.getState());
      console.groupEnd();
      return result;
		}

		result = next(action);
    console.log('LOGGERS next state (for update)', store.getState());
		console.groupEnd();
		return result;
};

const saver = store => next => action => {
  console.log("saver action", action);
	const result = next(action);
	console.log("saver - next store", store.getState());
	localStorage.news_API = JSON.stringify(store.getState());

	return result;
};

const storeFactory = () =>
	createStore(
		reducer,
		localStorage[lSName] ?
			JSON.parse(localStorage[lSName]) :
			[],
		compose(
			applyMiddleware(logger, saver),
			(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
		)
	);

export default storeFactory;
