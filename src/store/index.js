import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers';

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
	const result = next(action);
	localStorage.news_API = JSON.stringify(store.getState());
	return result;
};

const storeFactory = () =>
	createStore(
		reducer,
		(localStorage.news_API) ?
			JSON.parse(localStorage.news_API) :
			{},
		compose(
			applyMiddleware(logger, saver),
			(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
		)
	);

export default storeFactory;
