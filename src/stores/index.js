import reducer from "../reducers";
import { createStore } from "redux";

import example from './example.json';

const initialState = {
    ...example,
    listMap : {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }
};

const store = createStore(reducer, initialState);
export default store;