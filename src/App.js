/**
* App.js
*/
/*https://www.npmjs.com/package/axios
/*Client ID
C5WGCVHUQG4VSB0T0B5MC5X3ZVDPRAOAOSUBIS1ZR33ICL4N
Client Secret
J3UTECRMNTKMI2CQZPAUPRENI4DQH0T02Z30DTRT0NXIW5KC*/

import React, { Component } from 'react';
import './App.css';
//import Map from './Components/map';
import Title from './Components/title';
import SearchResults from './Components/search-results';
import axios from 'axios'
//import MapContainer from './Components/map';

//import SquareAPI from "./API/"

class App extends Component {
  state = {
    venues: []

  }


  componentDidMount(){
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg&v=3&callback=initMap")
     window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";

    const parameters = {
      client_id: "C5WGCVHUQG4VSB0T0B5MC5X3ZVDPRAOAOSUBIS1ZR33ICL4N",
      client_secret: "IJB11IVJOLTYP01KV2AASJ0BMG53HI3ET5FKT4JH3WGMJAYP",
      query: "parks",
      near:"Indianapolis",
      limit: 2,
      v: "20181018"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())

    })
    .catch(error => {
      console.log("error! " + error)
    })

  }
  initMap = () => {
  const map = new window.google.maps.Map(document.getElementById('map'), {
  center: {lat: 39.768403, lng: -86.158068},
  zoom: 10
})
//forEach instead of map? https://stackoverflow.com/questions/45014094/expected-to-return-a-value-at-the-end-of-arrow-function
this.state.venues.forEach(points => {
//venue.location. lat lng
  const marker = new window.google.maps.Marker({
  position: {lat: points.venue.location.lat, lng: points.venue.location.lng},
  map: map,
  title: points.venue.name
})

this.state.venues.forEach(infoBox => {
  const infoWindow = new window.google.maps.InfoWindow({
    content: points.venue.name
  })

marker.addListener('click', function(){
  infoWindow.open(map, marker);
})

})
/* points.venue.location.address*/
/*this.state.venues.forEach(infoBox => {
  const infoWindow = new window.google.maps.InfoWindow({
    content: "hello"
  });*/
  /*marker.addListener('click', function(){
    infowindow.open(map, marker);
  });*/
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
