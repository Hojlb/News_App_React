import ActionTypes from '../../actions/ActionTypes';

export default function FreshNews (state=[], action) {
	switch (action.type) {
		case ActionTypes.DOWNLOAD_FRESH_NEWS: {
			return [...action.payload].map((item) => ({
				...item,
				like: 0,
				newsID: item.title,
				viewers: 0
			}))
				.sort((a,b)=> new Date(b.publishedAt) - new Date(a.publishedAt));
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