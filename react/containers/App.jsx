import React, { Component, PropTypes } from 'react'

import MapContainer from './MapContainer'

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="map-column">
          <MapContainer />
        </div>
        <div className="editor-body-column">
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
}
