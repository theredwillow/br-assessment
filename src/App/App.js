import React from 'react';
import './App.css';

import Header from './Header/Header';
import List from './List/List';
/* DEV NOTE: Can't get past cors problem on localhost with fetch(), temporary solution below to keep workflow going */
import example from './List/example.json';

const App = () => {

  return (<div className="App">
    <Header />
    <List restaurants={example.restaurants} />
  </div>);
};

export default App;