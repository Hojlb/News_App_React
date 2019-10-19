import ActionTypes from '../../actions/ActionTypes';


export default function FilterByTitle (state=[], action ) {
	 	if (action.type === ActionTypes.FIND_BY_TITLE) {
	 		 state.filter((item) => {
	 			console.log(item);
	 			return item.title.includes(action.payload)
			});
	 	}
		return state;
}