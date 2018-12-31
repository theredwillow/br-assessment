import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import { openMarker, closeMarker } from '../../actions';
import store from '../../stores';
import config from '../config';

export const dispatchMarker = (props, marker) => {
    store.dispatch(openMarker(props, marker));
};

export const dispatchMarkerClose = () => {
    if (store.getState().listMap.showingInfoWindow) {
        store.dispatch(closeMarker);
    }
};

const MarkerPopup = () => (
    <div>
        <h4>{ store.getState().listMap.selectedPlace.name }</h4>
    </div>
);

const placeMarker = (restaurant, key) => ([
    <Marker key={ `${key}-marker` }
        onClick={ dispatchMarker }
        name={ restaurant.name }
        position={ restaurant.location }
    />,
    <InfoWindow key={ `${key}-info` }
        marker={ store.getState().listMap.activeMarker }
        visible={ store.getState().listMap.showingInfoWindow }
        onClose={ dispatchMarkerClose }
    >
        <MarkerPopup/>
    </InfoWindow>
]);

const GoogleMap = GoogleApiWrapper({ apiKey: config.googleMapsAPIKey })(
    ({
        google,
        restaurants
    }) => (
        <Map
            google={ google }
            zoom={ 14 }
            style={{ width: '100%', height: '100%' }}
            initialCenter={{
                lat: 32.94954,
                lng: -96.824004
            }}
        >
            { restaurants.map( (r,i) => placeMarker(r,i) ) }
        </Map>
    )
);

export default GoogleMap;