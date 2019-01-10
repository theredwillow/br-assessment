import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import store from '../stores';

import Header from './Header/Header';
import ListScene from './ListScene/ListScene';
import DetailScene from './DetailScene/DetailScene';
// import MapScene from './MapScene/MapScene';

// <Link to="/map/">Map</Link>

const App = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact
        render={() => <ListScene restaurants={ store.getState().restaurants } />} />
      <Route path="/restaurant/:id"
        render={(props) => <DetailScene {...props} restaurants={ store.getState().restaurants } />} />
    </div>
  </Router>
);

/* 
    
    <Route path="/map/" component={MapScene} restaurants={ store.getState().restaurants } />
*/

export default App;