/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
import Map from './Components/map'
import Title from './Components/title'
import SearchBar from './Components/search-bar'
import SquareAPI from './API/';

class App extends Component {
  constructor(){
    super();
    this.state=({
      venues:[],
      markers:[],
      center:[],
      zoom: 12
    })
  }
  componentDidMount() {
    SquareAPI.search({
      near: "Indianapolis, IN",
      query: "tacos",
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lat,
          isOpen: false,
          isVisible:true,
        };
      });
      this.setState({venues, center,markers});
      console.log(results);
    });


  }


  render() {
    return (
      <div className="App">
      <Title/>
      <Map
      className = "map"/>
      <SearchBar
      className = "options-box"
      {...this.state}/>
      </div>
    );
  }
}

export default App;
