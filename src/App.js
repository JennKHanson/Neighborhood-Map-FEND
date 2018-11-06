/**
 * App.js
 */
/*https://www.npmjs.com/package/axios*/
/*
* TODO: Clean responsive.css
* TODO: Make sidebar with hamburger menu
* TODO: Fix overall design. :)
*/

import React, { Component } from "react";
import "./App.css";
import "./responsive.css"
import Title from "./Components/title";
import SearchBar from "./Components/search-bar";
import Footer from "./Components/footer";
import axios from "axios";

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
      limit: 5,
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
  console.log(this.state.venues)
    this.setState({ markers: markers });
    return (this.markerListener())
  }; //initMap bracket

  /**
   * Markers Click Event
   */
  markerListener = venue => {
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
      })}

  /**
   * Info Window Function
   */
  populateInfoWindow = marker => {
    if (!this.state.markers) return;
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
    this.state.map.setZoom(13);
    this.state.map.setCenter(marker.position)
  };

  handleInputClick = () => {
    this.map.center = {
      lat: 39.768403,
      lng: -86.158068
    }
    this.state.map.setZoom(10)
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
            {...this.state}
            listItemClick={this.listItemClick}
            handleInputClick={this.handleInputClick}
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
