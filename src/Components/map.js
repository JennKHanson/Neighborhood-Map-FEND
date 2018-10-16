/**
* Map Component
*///AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg
/** NOTE: RESOURCES
* https://google-developers.appspot.com/maps/documentation/utils/geocoder/#place_id%3DChIJxeXDEmhaa4gRGN2-NTGZSK0
* https://tomchentw.github.io/react-google-maps/
* https://www.youtube.com/watch?v=Q0vzqlnWWZw&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=4&t=0s
**https://www.npmjs.com/package/google-map-react
*/

import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//import LocationData from 'react'
//import { compose, withProps } from "recompose"
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//import SquareAPI from "../API/";

//const Location = ({text}) => <div>{text}</div>;
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker:{},
    selectedPlace:{},

    locations:[
    {index: 'Garfield', name: 'Garfield Park', location: {lat:39.735663, lng:-86.147061}},
    {index: 'Eagle', name: 'Eagle Creek', location: {lat: 39.854505, lng: -86.299588 }},
    {index: 'Broad', name: 'Broad Ripple Park', location: {lat: 39.868618, lng: -86.133435}},
    {index: 'Sahm', name: 'Sahm Park', location: {lat: 39.91976, lng: -86.053424}},
    {index: 'Holliday', name: 'Holliday Park', location: {lat: 39.870767, lng: -86.165001}},
    ]
};



  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,

    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,

      })

    }
  }
  render() {

  //{console.log(this.state.locations)}
    return(

      <Map
      google={this.props.google}
      onClick={this.onMapClicked}
      className={'maptest'}
      zoom={8}
      initialCenter={{
        lat: 39.768403,
        lng: -86.158068

      }}

      >

        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={this.state.locations[0].name}
        position={{
          lat: (this.state.locations[0].location.lat),
          lng: (this.state.locations[0].location.lng)
        }
      }
        //position={{lat: 39.735663 , lng: -86.147061}}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={this.state.locations[1].name}
        position={{
          lat: (this.state.locations[1].location.lat),
          lng: (this.state.locations[1].location.lng)
        }}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={this.state.locations[2].name}
        position={{
          lat: (this.state.locations[2].location.lat),
          lng: (this.state.locations[2].location.lng)
        }}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={this.state.locations[3].name}
        position={{
          lat: (this.state.locations[3].location.lat),
          lng: (this.state.locations[3].location.lng)
        }}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={this.state.locations[4].name}
        position={{
          lat: (this.state.locations[4].location.lat),
          lng: (this.state.locations[4].location.lng)
        }}
        />
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        //onClose={this.onInfoWindowClose}
        >
          <div>
            <h1 className='marker-info'>{this.state.selectedPlace.name}</h1>
          </div>
          </InfoWindow>
        </Map>

    )
  }
}
export default GoogleApiWrapper({
  apiKey: `AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg`
})(MapContainer)
