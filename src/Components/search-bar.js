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
      searchLocations: this.props.venues // passed explicitly from App, used to set initial list
    });
  };

  handleFilterVenues = value => {
    const tempVenues = [];
    //const markers = [];
    this.props.venues.forEach(venue => {
      if (venue.venue.name.toLowerCase().includes(value.toLowerCase())) {
        tempVenues.push(venue);
      }

      this.setState({
        searchLocations: tempVenues // list is updated as changes occur
      });
    });
  };
/*
  handleChange = e => {
    this.setState(
      { query: e.target.value },
      this.handleFilterVenues(e.target.value)
    );
  };*/

  // Ryan Waite: https://www.youtube.com/watch?v=5J6fs_BlVC0&feature=youtu.be
  handleChange(query){
    this.props.markers.forEach(marker => {
      marker.title.toLowerCase().includes(query.toLowerCase()) === true ?
      marker.setVisible(true) :
      marker.setVisible(false)
  });
      //console.log(marker.title)
    this.setState({ query });
    console.log(query)
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
            value={this.state.query} // is this necessary?
          />
        </div>

        <SearchList
          {...this.props}
          locations={this.state.searchLocations} // now passed as an explicit list from search-bar to SearchList, which ensures it updates as changes occur
          listItemClick={this.props.listItemClick}
        />
      </div>
    );
  }
}

export default SearchBar;
