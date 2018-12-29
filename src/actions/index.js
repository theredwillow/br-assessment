// Detail actions
export const openDetail = (index) => ({
    type: 'OPEN_DETAIL',
    payload: {
        index
    }
});

export const closeDetail = {
    type: 'CLOSE_DETAIL'
};

// Restaurant actions
export const updateRestaurants = (restaurants) => ({
    type: 'UPDATE_RESTAURANTS',
    payload: {
        restaurants
    }
});