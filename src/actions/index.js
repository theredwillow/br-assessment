// Restaurant actions
export const updateRestaurants = (restaurants) => ({
    type: 'UPDATE_RESTAURANTS',
    payload: {
        restaurants
    }
});

// List map actions
export const openMarker = (props, marker) => ({
    type: 'OPEN_MARKER',
    payload: {
        props,
        marker
    }
});

export const closeMarker = {
    type: 'CLOSE_MARKER'
};