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

const GoogleMap = GoogleApiWrapper({ apiKey: config.googleMapsAPIKey })(
    ({
        google
    }) => (
        <Map
            google={ google }
            zoom={ 14 }
            style={{ width: '100%', height: '100%' }}
            initialCenter={{ lat: -1.2884, lng: 36.8233 }}
        >
            <Marker
            onClick={ dispatchMarker }
            name={ 'Kenyatta International Convention Centre' }
            />
            <InfoWindow
                marker={ store.getState().listMap.activeMarker }
                visible={ store.getState().listMap.showingInfoWindow }
                onClose={ dispatchMarkerClose }
            >
                <div>
                    <h4>{ store.getState().listMap.selectedPlace.name }</h4>
                </div>
            </InfoWindow>
        </Map>
    )
);

export default GoogleMap;