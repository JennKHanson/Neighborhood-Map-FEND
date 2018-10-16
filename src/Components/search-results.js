/**
* Search Component
*/

import React from 'react'
import SearchBar from './search-bar'
//import MapContainer from './map'
/*
const locations = {
{name: 'Garfield Park', location: {lat:39.735663, lng:-86.147061}},
{name: 'Eagle Creek', location: {lat: 39.854505, lng: -86.299588 }},
{name: 'Broad Ripple Park', location: {lat: 39.868618, lng: -86.133435}},
{name: 'Sahm Park', location: {lat: 39.91976, lng: -86.053424}},
{name: 'Holliday Park', location: {lat: 39.870767, lng: 86.165001}}
}
*/
class SearchResults extends React.Component {
  render() {
    //console.log ('Props', this.state.locations)
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb

    return(
    

    <ul  className='location-list'>
<SearchBar/>
    {/*{this.props.locations.map(location => (
      <li key={location.name} style={{listStyleType:"none"}}>{location.name}</li>
    ))}*/}
    </ul>



)}
}

export default SearchResults
