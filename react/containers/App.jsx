import React, { Component, PropTypes } from 'react'

import MapContainer from './MapContainer'

export default class App extends Component {
  render() {
    const colStyle = {
      border: '1px solid #ccc',
    }

    return (
      <div className="row">
        <div className="col-xs-8" style={colStyle}>
          <MapContainer />
        </div>
        <div className="col-xs-4" style={colStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
}
