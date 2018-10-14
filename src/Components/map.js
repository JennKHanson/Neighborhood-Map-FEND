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
  render() {
    return(
      <Map google={this.props.google} zoom={14}
      initialCenter={{
        lat: 39.768403,
        lng: -86.158068
      }

      }
      >
        <Marker onClick={this.onMarkerClick}
              name='{Current Location}' />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1></h1>
          </div>
          </InfoWindow>
        </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: `AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg`
})(MapContainer)
