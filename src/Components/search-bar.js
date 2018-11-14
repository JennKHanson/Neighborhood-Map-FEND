/**
 * Search-Bar Component
 */

import React from "react";
import SearchList from "./search-list";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      searchLocations: [],
    };
  }
componentWillReceiveProps = () => {
  this.setState({
    //sets locations list
    searchLocations: this.props.venues
  });
};

handleFilterVenues = value => {
  const tempVenues = [];
  this.props.venues.forEach(venue => {
    if (venue.venue.name.toLowerCase().includes(value.toLowerCase())) {
      tempVenues.push(venue);
    }

    this.setState({
      // list is updated as changes occur
      searchLocations: tempVenues
    });
  });
};

// Ryan Waite: https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
handleChange(query, e ){
  this.props.markers.forEach(marker => {
    marker.title.toLowerCase().includes(query.toLowerCase()) === true ?
    marker.setVisible(true) :
    marker.setVisible(false)
});
    this.setState({ query });
  console.log(query)
    this.handleFilterVenues(query)
}

render() {
  //33:39 https://drive.google.com/drive/u/0/folders/1QpvhhOn_FzgB8k7TBM1jolOXdpbmbOdb
  return (
    <div className="location-search"
    id="parks">
      <div className="search-bar-container">
        <input
          type="search"
          className="search-bar"
          placeholder="Filter Parks..."
          onChange={(e) => {this.handleChange(e.target.value)}}
          aria-label="search text"
          value={this.state.query}
        />
        <SearchList
       {...this.props}
       locations={this.state.searchLocations}
       listItemClick={this.props.listItemClick}
     />

      </div>

    </div>
  );
}
}

export default SearchBar;
