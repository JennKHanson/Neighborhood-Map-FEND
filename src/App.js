/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
import Map from './Components/map';
import Title from './Components/title';
import SearchResults from './Components/search-results';
//import SquareAPI from "./API/"

class App extends Component {



  render() {
    return (
      <div className="App">
      <div className="container">
      <Title/>

     <Map
      className = "map"
      />

      <SearchResults
      className = "options-box"
      />
      </div>
      </div>
    );
  }
}

export default App;
