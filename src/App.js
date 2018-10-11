/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
import Map from './Components/map';
import Title from './Components/title';
import SearchBar from './Components/search-bar';
import SquareAPI from "./API/"

class App extends Component {
  constructor(){
    super();
    this.state={
      venue: [],
      markers: [],
      center: [],
      zoom: 10
    };
  }

  componentDidMount() {
    SquareAPI.search({
      near: "Indianapolis, IN",
      query: "tennis",
      limit: 1
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return{
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen:false,
          isVisible:false
        };
      });
      this.setState({ venues, center, markers });
       console.log(results)
    });
  }

  render() {
    return (
      <div className="App">
      <Title/>
      <Map
      className = "map"
      {...this.state}
      />
      <SearchBar
      className = "options-box"
      />
      </div>
    );
  }
}

export default App;
