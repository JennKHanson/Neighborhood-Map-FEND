/**
* Map Component
*/
/** NOTE: RESOURCES
* https://google-developers.appspot.com/maps/documentation/utils/geocoder/#place_id%3DChIJxeXDEmhaa4gRGN2-NTGZSK0
* https://tomchentw.github.io/react-google-maps/
* https://www.youtube.com/watch?v=Q0vzqlnWWZw&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=4&t=0s
*/

import React, {Component} from "react"
//import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SquareAPI from './API/';


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
  <GoogleMap
  defaultZoom={10}
  zoom={props.zoom}
  defaultCenter={{ lat: 39.76840, lng: -86.158068 }}
  center={props.center}
  >
    {props.markers &&
      props.markers
      .filter(marker => marker.isVisible)
      .map((marker, idx) => (
      <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} />
    ))}
  </GoogleMap>
))
);

export default class Map extends Component {
  render(){
    return(
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg"
        loadingElement={<div className='map'/>}
        containerElement={<div className='map'/>}
        //containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `80%` }} />}
      />

    );
  }
}
