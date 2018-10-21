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
    console.log ('Props', this.props)

    console.log(this.props.locations[0])
    //console.log(this.state.venues)
    //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb

    return(

    <div className='location-list'>
    <SearchBar/>

      <li></li>


    </div>


)}
}

export default SearchResults
