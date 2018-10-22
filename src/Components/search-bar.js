/**
* Search Component
*/

import React from 'react'
//import SearchInput from './search-input'
import SearchList from './search-list'

class SearchBar extends React.Component {

  render() {
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb
    return(
    <div className='location-search'>
    {/* was search-input */}
    <div className="search-bar-container">
    <input type="search" className="search-bar" placeholder="Filter Parks..."/>
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
