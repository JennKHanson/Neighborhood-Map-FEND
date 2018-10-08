/**
* App.js
*/

import React, { Component } from 'react';
import './App.css';
//import MapDiv from './Components/map'
import Title from './Components/title'
import SearchBar from './Components/search-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title/>
      <SearchBar/>
      </div>
    );
  }
}

export default App;
