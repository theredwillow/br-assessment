const reducer = (state, action) => {
	switch (action.type) {

		// Detail
		case "OPEN_DETAIL":
			return {
				...state,
				active: action.payload.index
			};
		case "CLOSE_DETAIL":
			return {
				...state,
				active: null
			};
		
		// Restaurant
		case "UPDATE_RESTAURANTS":
			return {
				...state,
				restaurants: action.payload.restaurants
			};

		default:
		    return state;
	}
};
export default reducer;