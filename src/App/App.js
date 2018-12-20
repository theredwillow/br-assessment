import React from 'react';
import './App.css';

import Header from './Header/Header';
import List from './List/List';

const App = () => {

  let exampleArray = [
    {
      name: "Taco 'Bout It",
      category: "Taco Stand",
      streetAddress: "123 Fake St.",
      city: "Fort Worth",
      state: "TX",
      zip: "xxxxx",
      phone: "(817) 555-2337",
      twitter: "tweettweetyo"
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
    <List active="0" restaurants={exampleArray} />
  </div>);
};

export default App;