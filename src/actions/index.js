import ActionTypes from './ActionTypes';

export const downloadFreshNews = (data) => {
	if (Array.isArray(data)) {
			return {
				type: ActionTypes.DOWNLOAD_FRESH_NEWS,
				error: false,
				payload: data,
			};
	}

	return {
		type: ActionTypes.DOWNLOAD_ERROR,
		error: true,
		payload: data,
	}
};

export const updateRating = (rate) =>
  ({
    type: ActionTypes.UPDATE_RATING,
    payload: rate,
  });

export const updateViewers = (count) =>
	({
		type: ActionTypes.UPDATE_VIEWERS,
		payload: count,
	});

export const findNews = (count) =>
	({
		type: ActionTypes.FILTER_BY_TITLE,
		payload: count,
	});