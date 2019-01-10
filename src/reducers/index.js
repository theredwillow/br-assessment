const reducer = (state, action) => {
	switch (action.type) {
		
		// Restaurant
		case "UPDATE_RESTAURANTS":
			return {
				...state,
				restaurants: action.payload.restaurants
			};

		// List Map
		case "OPEN_MARKER":
			return {
				...state,
				listMap: {
					selectedPlace: action.payload.props,
					activeMarker: action.payload.marker,
					showingInfoWindow: true
				}
			};
		case "CLOSE_MARKER":
			return {
				...state,
				listMap: {
					showingInfoWindow: false,
					activeMarker: {},
					selectedPlace: {}
				}
			};

		default:
		    return state;
	}
};
export default reducer;