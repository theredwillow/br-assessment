import React from 'react';
import './App.css';

import Header from './Header/Header';
import ListTile from './ListTile/ListTile';

const App = () => {
  return (<div className="App">
    <Header />
    <ListTile name="Test Name" category="Test Category" />
    <ListTile />
    Hello World!
  </div>);
};

export default App;