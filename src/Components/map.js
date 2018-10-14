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
};
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render() {
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
        name={'Garfield Park'}
        position={{lat: 39.735663 , lng: -86.147061}}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={'Eagle Creek'}
        position={{lat: 39.854505 , lng: -86.299588}}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={'Broad Ripple Park'}
        position={{lat: 39.868618 , lng: -86.133435}}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={'Sahm Park'}
        position={{lat: 39.91976, lng: -86.053424}}
        />
        <Marker
        onClick={this.onMarkerClick}
        title={'test test'}
        name={'Holliday Park'}
        position={{lat: 39.870767, lng: -86.165001}}
        />
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        //onClose={this.onInfoWindowClose}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
          </InfoWindow>
        </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: `AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg`
})(MapContainer)
