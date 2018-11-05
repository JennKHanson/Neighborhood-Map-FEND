/**
* Search List
*/

import React from 'react'
//import SearchBar from './search-bar'

class SearchList extends React.Component {

  render() {
    return (
    <ol>
      {this.props.locations.map((location) => (
        <li
        onClick={() => this.props.listItemClick(location.venue.name)}
        onKeyDown={()=> this.props.listItemClick(location.venue.name)}
        style={{listStyleType: "none"}}
        key={location.venue.name}
        tabIndex="0" className='location-list'>{location.venue.name}</li>
      ))}
</ol>
    )

  }}


export default SearchList
//**I tried both of these**
//onClick={() => this.props.listItemClick(this.props)}
//onClick={this.props.listItemClick}


/*<ol>
{this.props.locations.map((location) => <SearchListItem {...location}/>)}
</ol>*/
