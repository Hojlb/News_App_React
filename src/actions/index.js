import C from '../constants';

export const downloadFreshNews = (data) =>
	(
		{
			type: C.DOWNLOAD_FRESH_NEWS,
			payload: data,
		}
	);

export const updateRating = (rate) =>
  ({
    type: C.UPDATE_RATING,
    payload: rate,
  });

export const updateViewers = (count) =>
	({
		type: C.UPDATE_VIEWERS,
		payload: count,
	});