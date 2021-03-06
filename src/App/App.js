import React from 'react';
import './App.css';
import store from '../stores';
import Header from './Header/Header';
import GoogleMap from './GoogleMap/GoogleMap';
import List from './List/List';

const namePage = (active) => (active) ? `detail-${active}` : "list";

// <GoogleMap restaurants={ store.getState().restaurants } />
const App = () => (
  <div className="App" data-page={ namePage(store.getState().active) }>
    <Header />
    <List restaurants={ store.getState().restaurants } active={ store.getState().active } />
  </div>
);

export default App;