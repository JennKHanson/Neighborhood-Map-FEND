/**
* Input Component
*/

import React from 'react'

class SearchBar extends React.Component {
  render() {
    return(
      <div className="search-bar-container">
      <input type="text" className="search-bar" placeholder="Search.."/>
      </div>
    )
  }
}
export default SearchBar
