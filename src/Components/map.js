/**
* Map Component
*/
/** NOTE: RESOURCES
* https://google-developers.appspot.com/maps/documentation/utils/geocoder/#place_id%3DChIJxeXDEmhaa4gRGN2-NTGZSK0
* https://tomchentw.github.io/react-google-maps/
* https://www.youtube.com/watch?v=Q0vzqlnWWZw&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=4&t=0s
**https://www.npmjs.com/package/google-map-react
*/

import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
//import { compose, withProps } from "recompose"
//import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//import SquareAPI from "../API/";

const Location = ({text}) => <div>{text}</div>;
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.76840,
      lng: -86.158068
    },
    zoom: 11
  };

  render(){

    return (
      <div className={'map'}>
      <GoogleMapReact
      bootstrapURLKeys={{key: 'AIzaSyC1S5nF5e6gJzghv2fAwIGN7IWJuQVzJMg'}}
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      >
      <Location
      lat={39.734314}
      lng={-86.14841}
      text={'test'}
      src={'http://res.cloudinary.com/dpus3ns57/image/upload/v1539446785/2000px-Map_marker.svg.png'}
      />
      </GoogleMapReact>
      </div>
    );
  }
}
export default Map
