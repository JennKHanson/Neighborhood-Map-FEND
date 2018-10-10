/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
import Map from './Components/map';
import Title from './Components/title';
import SearchBar from './Components/search-bar';
import SquareAPI from "./API/index"

class App extends Component {

  componentDidMount() {
    SquareAPI.search({
      near: "Indianapolis, IN",
      query: "tacos",
      limit: 5
    }).then(results => {
      console.log(results)
    });
  }


  render() {
    return (
      <div className="App">
      <Title/>
      <Map
      className = "map"
      />
      <SearchBar
      className = "options-box"/>
      </div>
    );
  }
}

export default App;
