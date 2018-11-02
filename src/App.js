/**
 * App.js
 */
/*https://www.npmjs.com/package/axios

/*
TODO:
Line 126 & 127 error: "map is undefined"
* I understand that this is scope related; however,
  I don't know how to fix it. When I close an info window, I get the full screen error.
* See note in line 127.
TODO:
Line 161: Code does not work.
* I am attempting to get the list items to talk to
  the map markers.
* See detailed note in line 162.
*/

import React, { Component } from "react";
import "./App.css";
import Title from "./Components/title";
import SearchBar from "./Components/search-bar";
import axios from "axios";
//import SquareAPI from "./API/"

class App extends Component {
  state = {
    venues: [],
    markers: [],
    map: null,
    infowindow: null,
    updateSuperState: obj => {
      this.setState(obj)
    }
  };

  componentWillMount() {
    this.getVenues();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVz" +
        "JMg&v=3&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "C5WGCVHUQG4VSB0T0B5MC5X3ZVDPRAOAOSUBIS1ZR33ICL4N",
      client_secret: "IJB11IVJOLTYP01KV2AASJ0BMG53HI3ET5FKT4JH3WGMJAYP",
      query: "parks",
      near: "Indianapolis",
      limit: 2,
      v: "20181018"
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log("error! " + error);
      });
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 39.768403,
        lng: -86.158068
      },
      zoom: 10
    });
    const largeInfowindow = new window.google.maps.InfoWindow();

    this.setState({
      map: map,
      infowindow: largeInfowindow
    });

    let markers = [];

    for (var i = 0; i < this.state.venues.length; i++) {
      const position = this.state.venues[i].venue.location;
      const title = this.state.venues[i].venue.name;
      const address = this.state.venues[i].venue.location.address;
      // forEach instead of map?
      // https://stackoverflow.com/questions/45014094/expected-to-return-a-value-at-the
      // -end-of-arrow-function
      const marker = new window.google.maps.Marker({
        position: position,
        map: map,
        title: title,
        address: address,
        animation: window.google.maps.Animation.DROP,
        id: i
      }); // marker object bracket (const marker)

      markers.push(marker);
    } //loop bracket

    this.setState({ markers: markers });
    this.state.markers.forEach(marker => {
      marker.addListener("click", () => {
        this.populateInfoWindow(marker);
        marker.animation = window.google.maps.Animation.BOUNCE;
        setTimeout(() => {
          marker.setAnimation(null);
        }, 750);
        this.state.map.setZoom(13);
        this.state.map.setCenter(marker.position);
      });
    });
  }; //initMap bracket

  populateInfoWindow = marker => {
  //  const bound = new window.google.maps.LatLngBounds(0);
    if (!this.state.markers) return;
    //console.log("markers: ", this.state.markers);
    let newMarkers = this.state.markers.slice();

    if (this.state.infowindow.marker !== marker) {
      this.setState((marker) => ({
        marker}));
      this.state.infowindow.setContent(
        "<div>" + marker.title + "</div><div>" + marker.address + "</div>"
      );
      this.state.infowindow.open(this.state.map, marker);
      this.state.infowindow.addListener("closeclick", () => {
      //**this.state.infowindow.setMarker = null;** new is below
      this.setState((marker) => ({
      }));
        //console.log(this.state.map);
        this.state.map.setZoom(10);
        this.state.map.setCenter({ lat: 39.768403, lng: -86.158068 });
        // ** code does not work **
        // map is undefined
        // It is undefined because of a scope issue that I don't know how to fix
      });
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      setTimeout(() => marker.setAnimation(null), 750);
    } //if statement bracket
    this.setState({ markers: newMarkers });
  };

  listItemClick = venue => {
    console.log(venue);
    const marker = this.state.markers.find(marker => venue === marker.title);
    // ** code does not work **
    // Code: If venue matches marker title, then apply markerListener()
    // venue and marker.title log with the same information
    // I think the problem is in the markerListener() code
    this.populateInfoWindow(marker);
    console.log(marker.title);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Title />
          <div id="map">{/*<MapContainer />*/}</div>
          <SearchBar
            className="options-box"
            locations={this.state.venues}
            {...this.state} //passing down everything
            listItemClick={this.listItemClick} //******
          />
        </div>
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;

// Marker Bounds??
// https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-
// 2478625c9597/modules/a2527452-bb9f-431c-bfa7-a20b17992650/lessons/8304370457/c
// oncepts/83122494450923
/**
this.state.markers.push(marker);
const bounds = new window.google.maps.LatLngBounds();
window.bounds.extend(this.state.markers[i].position);
map.fitBounds(window.bounds);
**/
