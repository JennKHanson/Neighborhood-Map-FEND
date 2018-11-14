/**
* Search List
*/

import React from 'react'

class SearchList extends React.Component {

  render() {
    return (
    <div>
      {this.props.locations.map((location) => (
        <div
        onFocus={()=> this.props.listItemClick(location.venue.name)}
        key={location.venue.name}
        tabIndex="0"
        className="location-list"
        >
        {location.venue.name}</div>
      ))}
      </div>
    )

  }}


export default SearchList
