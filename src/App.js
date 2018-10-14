/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
import Map from './Components/map';
import Title from './Components/title';
import SearchResults from './Components/search-results';
//import SquareAPI from "./API/"

const locations = [
{name: 'Garfield Park', location: {lat:39.735663, lng:-86.147061}},
{name: 'Eagle Creek', location: {lat: 39.854505, lng: -86.299588 }},
{name: 'Broad Ripple Park', location: {lat: 39.868618, lng: -86.133435}},
{name: 'Sahm Park', location: {lat: 39.91976, lng: -86.053424}},
{name: 'Holliday Park', location: {lat: 39.870767, lng: 86.165001}},
];


class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="container">
      <Title/>

     <Map
      className = "map"
      locations = {locations}
      />

      <SearchResults
      className = "options-box"
      locations = {locations}
      />
      </div>
      </div>
    );
  }
}

export default App;
