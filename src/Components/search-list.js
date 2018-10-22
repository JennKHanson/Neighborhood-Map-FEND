/**
* Search List
*/

import React from 'react'
//import SearchInput from './search-input'
//import SearchListItem from './search-list-item'

class SearchList extends React.Component {

  render() {
    return (
    <ol>
      {this.props.locations.map((location) => (
        <li  onClick={()=> this.props.listItemClick(this.props)} key ={location.venue.name} style={{listStyleType: "none"}} className='location-list'>{location.venue.name}</li>
      ))}
</ol>
    )

  }}

export default SearchList

/*<ol>
{this.props.locations.map((location) => <SearchListItem {...location}/>)}
</ol>*/
