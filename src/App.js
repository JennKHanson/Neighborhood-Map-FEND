/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
//import Map from './Components/map';
import Title from './Components/title';
import SearchResults from './Components/search-results';
import MapContainer from './Components/map';

//import SquareAPI from "./API/"

class App extends Component {
  state ={
    locations:[
    {index: 'Garfield', name: 'Garfield Park', location: {lat:39.735663, lng:-86.147061}},
    {index: 'Eagle', name: 'Eagle Creek', location: {lat: 39.854505, lng: -86.299588 }},
    {index: 'Broad', name: 'Broad Ripple Park', location: {lat: 39.868618, lng: -86.133435}},
    {index: 'Sahm', name: 'Sahm Park', location: {lat: 39.91976, lng: -86.053424}},
    {index: 'Holliday', name: 'Holliday Park', location: {lat: 39.870767, lng: -86.165001}},
    ]

  }

  render() {
    return (
      <div className="App">
      <div className="container">
      <Title/>
      <div className="map">
     <MapContainer
      locations = {this.state.locations}
      />
      </div>

      <SearchResults
      className = "options-box"
      locations = {this.state.locations}
      />
      </div>
      </div>
    );
  }
}

export default App;
