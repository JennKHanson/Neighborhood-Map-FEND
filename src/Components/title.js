/**
* Main Page Title Component
*/

import React from 'react'

class Title extends React.Component {
  render() {
    return(
      <nav className="title">
      <h1>Indy Parks</h1>
      <a href="#parks" className="hidden-link" tabIndex="0">Take me to parks list</a>

      </nav>
    )
  }
}
export default Title
