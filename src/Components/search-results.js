/**
* Search Component
*/

import React from 'react'
import SearchBar from './search-bar'

class SearchResults extends React.Component {

/*
function getName (){}
venues.map()
*/

  render() {
    //console.log ('Props', this.props)
    //console.log(this.props.getVenues)
    console.log(this.props.locations)
    //console.log(this.props.locations[0].venue.name)
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb
    //const listLocations = (this.props.locations);
    //console.log(listLocations)


    return(

    <div className='location-search'>
    <SearchBar/>

      <ul>

      {this.props.locations.map((location) => (
        <li key ={location.venue.name} style={{listStyleType: "none"}} className='location-list' >{location.venue.name}</li>
      ))}
</ul>
    </div>


)}
}

export default SearchResults
