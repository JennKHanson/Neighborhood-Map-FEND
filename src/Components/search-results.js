/**
* Search Component
*/

import React from 'react'
import SearchBar from './search-bar'
import App from '../App'

class SearchResults extends React.Component {
  render() {
    console.log ('Props', this.props)
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb

    return(

    <div className='location-list'>
    <SearchBar/>
    <ul>

      <li>this.state.venues.venue.name</li>

    </ul>
    </div>


)}
}

export default SearchResults
