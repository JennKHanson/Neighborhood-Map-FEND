/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
//import Map from './Components/map';
import Title from './Components/title';
import SearchResults from './Components/search-results';
//import MapContainer from './Components/map';

//import SquareAPI from "./API/"

class App extends Component {

  componentDidMount(){
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg&v=3&callback=initMap")
     window.initMap = this.initMap
  }

  initMap = () => {
  var map = new window.google.maps.Map(document.getElementById('map'), {
  center: {lat: 39.768403, lng: -86.158068},
  zoom: 8
})
  }

render() {
  return (
    //console.log(this.state.locations),
    <div className="App">
    <div className="container">
    <Title/>
    <div id="map">
   {/*<MapContainer />*/}
    </div>
    <SearchResults
    className = "options-box"/>
    />
    </div>
    </div>
  )

}

}



function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}



export default App;

/*Client ID
C5WGCVHUQG4VSB0T0B5MC5X3ZVDPRAOAOSUBIS1ZR33ICL4N
Client Secret
J3UTECRMNTKMI2CQZPAUPRENI4DQH0T02Z30DTRT0NXIW5KC/*
