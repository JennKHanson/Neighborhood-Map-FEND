/**
* Search Component
*/

import React from 'react'
import SearchBar from './search-bar'
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
    const locations = [
    {name: 'Garfield Park', location: {lat:39.735663, lng:-86.147061}},
    {name: 'Eagle Creek', location: {lat: 39.854505, lng: -86.299588 }},
    {name: 'Broad Ripple Park', location: {lat: 39.868618, lng: -86.133435}},
    {name: 'Sahm Park', location: {lat: 39.91976, lng: -86.053424}},
    {name: 'Holliday Park', location: {lat: 39.870767, lng: 86.165001}},
    ];
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb

    return(
    <div className = "location-list">
    <div>
    <SearchBar/>
    <ul>
    {locations.map(location => (
      <li key={location.name} style={{listStyleType:"none"}}>{location.name}</li>
    ))}
    </ul>
    </div>
    </div>

)}
}

export default SearchResults
