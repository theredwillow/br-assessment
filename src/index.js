import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App/App';
import config from './App/config';

import { updateRestaurants } from './actions';
import store from './stores';

const downloadRestaurants = (jsonURL) => {
    // Allow-Control-Allow-Origin: * Chrome Extension for localhost testing
    fetch(jsonURL)
      .then(res => res.json())
      .then(data => store.dispatch(updateRestaurants(data.restaurants)));
};
downloadRestaurants(config.jsonURL);

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
