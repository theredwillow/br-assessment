import React from 'react';
import './App.css';

import Header from './Header/Header';
import List from './List/List';

const App = () => {

  let exampleArray = [
    {
      name: "Taco 'Bout It",
      category: "Taco Stand"
    },
    {
      name: "Pho King",
      category: "Vietnamese"
    },
    {
      name: "Pass-Out Bar",
      category: "Dive Bar"
    }
  ];

  return (<div className="App">
    <Header />
    <List restaurants={exampleArray} />
    Hello World!
  </div>);
};

export default App;