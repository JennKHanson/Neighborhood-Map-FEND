/**
* Search Component
*/

import React from 'react'
import SearchList from './search-list'

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ""
    }
  }

  handleFilterVenues = () => {};

  handleChange = e => {
    console.log(this.props.venues) //logs the array of two objects

    //this.props.venue.location.name "should" get the name of the location;
    //however, when typing in the search box, I get the error
    //that location is undefined. Why is it undefined?
    this.setState({ query: e.target.value });
    const markers = this.props.venues.map(venue => {
      const isMatched = this.props.venue.location.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(marker =>  venue === marker.title);
      if(isMatched) { // will probably have to change this... TBD
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({markers})

  };

  render() {
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb
    return(
    <div className='location-search'>
    {/* was search-input */}
    <div className="search-bar-container">
    <input
      type="search"
      className="search-bar"
      placeholder="Filter Parks..."
      onChange={this.handleChange}
    />
    </div>

    <SearchList {...this.props} listItemClick={this.props.listItemClick}/>
      {/*<ul>
      {this.props.locations.map((location) => (
        <li  key ={location.venue.name} style={{listStyleType: "none"}} className='location-list'>{location.venue.name}</li>
      ))}
</ul>*/}
    </div>

)}
}
//onclick={}

export default SearchBar
