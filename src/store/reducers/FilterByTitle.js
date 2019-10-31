import ActionTypes from '../../actions/ActionTypes';

export default function FilterByTitle (state="", action ) {
	 	if (action.type === ActionTypes.FILTER_BY_TITLE) {
	 		 return action.payload;
			}
	 	return state;
}