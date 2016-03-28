import React, { Component, PropTypes } from 'react'

import MapContainer from '../containers/MapContainer'

export default class EditorLayout extends Component {
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

EditorLayout.propTypes = {
  children: PropTypes.node,
}
