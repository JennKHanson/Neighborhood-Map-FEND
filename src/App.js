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
import Title from './Components/title';
import SearchBar from './Components/search-bar';
import axios from 'axios';
//import SquareAPI from "./API/"

class App extends Component {
  state = {
    venues: [],
    markers: []
  }

  listItemClick = () => {
    console.log(this.state.venues)
  };


  //***** "Parsing error: Unexpected token" when function is here ******
/*
  function listItemClick(){
    console.log("test")
  }*/

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

  initMap = () => { //closing bracket is in line 127 moving things outside of bracket causes errors
  const map = new window.google.maps.Map(document.getElementById('map'), {
  center: {lat: 39.768403, lng: -86.158068},
  zoom: 10
})
//console.log(this.state.venues);
/*
function listItemClick(){
  console.log(this.state.venues)
}(listItemClick())*/

const largeInfowindow = new window.google.maps.InfoWindow();
//const bound = new window.google.maps.LatLngBounds(0);

for (var i = 0; i < this.state.venues.length; i++){
  const position = this.state.venues[i].venue.location;
  const title = this.state.venues[i].venue.name;
  const address = this.state.venues[i].venue.location.address;
//forEach instead of map? https://stackoverflow.com/questions/45014094/expected-to-return-a-value-at-the-end-of-arrow-function
  const marker = new window.google.maps.Marker({
  position: position,
  map: map,
  title: title,
  address: address,
  animation: window.google.maps.Animation.DROP,
  id: i
}); // marker object bracket (const marker)

this.state.markers.push(marker);

function markerListener(){
marker.addListener('click', function(){
  populateInfoWindow(this, largeInfowindow);
  marker.animation = window.google.maps.Animation.BOUNCE;
  setTimeout(function(){ marker.setAnimation(null);}, 750);
  this.map.setZoom(13);
  this.map.setCenter(marker.position)
}); //marker listener bracket
}(markerListener()) //markerListener function bracket
} // for loop bracket

//***** I can't access this function when it's here ******
/*function listItemClick(){
  console.log(this.state.venues)
}(listItemClick())
*/
/*listItemClick = ()=> {
  console.log(this)
}*/
//this.listItemClick = this.listItemClick.bind(this);

function populateInfoWindow(marker, infowindow) {
  if (infowindow.marker !== marker) {
    infowindow.marker = marker;
    infowindow.setContent(
      '<div>' + marker.title + '</div>' +
      '<div>' + marker.address  + '</div>');
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function(){
      infowindow.setMarker = null;
      map.setZoom(10);
      map.setCenter({lat: 39.768403, lng: -86.158068})
    });
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(() => marker.setAnimation(null), 750);
  } //if statement bracket
} //populateInfoWindow bracket

} //initMap bracket

render() {
  return (
    //console.log(this.state.locations),
    <div className="App">
    <div className="container">
    <Title/>
    <div id="map">
   {/*<MapContainer />*/}
    </div>
    <SearchBar
    className = "options-box"
    locations = {this.state.venues}
    {...this.state} //passing down everything
    listItemClick={this.listItemClick} //******
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



//Marker Bounds??
//https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/a2527452-bb9f-431c-bfa7-a20b17992650/lessons/8304370457/concepts/83122494450923
/**
this.state.markers.push(marker);
const bounds = new window.google.maps.LatLngBounds();
window.bounds.extend(this.state.markers[i].position);
map.fitBounds(window.bounds);
**/
