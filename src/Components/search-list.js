/**
* Search List
*/

import React from 'react'

class SearchList extends React.Component {

  render() {
    return (
    <ol>
      {this.props.locations.map((location) => (
        <li
        onFocus={()=> this.props.listItemClick(location.venue.name)}
        style={{listStyleType: "none"}}
        key={location.venue.name}
        tabIndex="0" className='location-list'>{location.venue.name}</li>
      ))}
</ol>
    )

  }}


export default SearchList
