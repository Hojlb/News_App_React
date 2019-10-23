import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers';
import changeEqualObjectInArray from "../lib/changeEqualObjectInArray";
import { lSName } from '../constants';

const logger = store => next => action => {

		console.groupCollapsed("dispatching", action.type);
		console.log('LOGGERS, prev state', store.getState());
		console.log('LOGGERS, action', action);

		const result = next(action);

		console.log('LOGGERS next state', store.getState());
		console.groupEnd();
		return result;
};

const saver = store => next => action => {
	const prevState = store.getState();
	const result = next(action);
	console.log("prevState", prevState);

	const nextState = store.getState();
	console.log( "nextState", nextState );

	const news = changeEqualObjectInArray(prevState.FreshNews, nextState.FreshNews, "newsID");
	console.log( "save store FreshNews:", news );

	localStorage.news_API = JSON.stringify({...nextState, FreshNews: news});
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
