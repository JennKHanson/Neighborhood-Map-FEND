/**
 * App.js
 */
/*https://www.npmjs.com/package/axios*/

import React, { Component } from "react";
import "./App.css";
import "./responsive.css"
import Title from "./Components/title";
import SearchBar from "./Components/search-bar";
import Footer from "./Components/footer";
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

  /**
   * Get Foursqure venues after page loads
   */
  componentWillMount() {
    this.getVenues();

  window.gm_authFailure = () =>
    alert(
      "Google Maps is have trouble loading."
    );
}

  /**
   * Create Google Map
   */
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVz" +
        "JMg&v=3&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  /**
   * Fetch Foursquare venues
   */
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "C5WGCVHUQG4VSB0T0B5MC5X3ZVDPRAOAOSUBIS1ZR33ICL4N",
      client_secret: "IJB11IVJOLTYP01KV2AASJ0BMG53HI3ET5FKT4JH3WGMJAYP",
      query: "parks",
      near: "Indianapolis",
      limit: 3,
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
        alert("error! " + error);
      });
  };

  /**
   * Map Function
   */
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 39.768403,
        lng: -86.158068
      },
      zoom: 10
    });
    const largeInfowindow = new window.google.maps.InfoWindow();
    const bounds = new window.google.maps.LatLngBounds();

    /*var bounds = {
        north: 39.927392,
        south: 39.632177,
        east: -85.937379,
        west: -86.328121
      };
      map.fitBounds(bounds);*/

    this.setState({
      map: map,
      infowindow: largeInfowindow
    });

    let markers = [];
    /**
     * Loop over Foursquare venues to create markers
     */
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
        id: i,
        tabIndex: 0
      }

    ); // marker object bracket (const marker)

      markers.push(marker);
      bounds.extend(marker.position);
    } //loop bracket
    map.fitBounds(bounds); //marker bounds

    /**
     * Markers Click Event
     */
  this.setState({ markers: markers });
    this.state.markers.forEach(marker => {
      marker.addListener("click", () => {
        this.populateInfoWindow(marker);
        marker.animation = window.google.maps.Animation.BOUNCE;
        setTimeout(() => {
          marker.setAnimation(null);
        }, 750);
        let newMap = this.state.map;
        newMap.setZoom(13);
        newMap.setCenter(marker.position);
        this.setState({map: newMap});

      });
    });
  }; //initMap bracket

  /**
   * Info Window Function
   */
  populateInfoWindow = marker => {
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
      this.setState((marker) => ({
      }));
        this.state.map.setZoom(10);
        this.state.map.setCenter({ lat: 39.768403, lng: -86.158068 });
      });
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      setTimeout(() => marker.setAnimation(null), 750);
    } //if statement bracket
    this.setState({ markers: newMarkers });

  };

  /**
   * Venue List Click Event
   */
  listItemClick = venue => {
    const marker = this.state.markers.find(marker => venue === marker.title);
    this.populateInfoWindow(marker);
    console.log(marker.title);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Title />
          <div
          id="map"
          role="application"
          aria-label="Map with park locations"
          >
          {/*<MapContainer />*/}</div>
          <SearchBar
            className="options-box"
            id="parks"
            locations={this.state.venues}
            {...this.state} //passing down everything
            listItemClick={this.listItemClick} //******
          />
          <Footer/>
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
// https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597/modules/a2527452-bb9f-431c-bfa7-a20b17992650/lessons/8304370457/concepts/83122494450923
/**
this.state.markers.push(marker);
const bounds = new window.google.maps.LatLngBounds();
window.bounds.extend(this.state.markers[i].position);
map.fitBounds(window.bounds);
**/
