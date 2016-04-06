import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import DatamapBox from '../components/DatamapBox'

class MapContainer extends Component {
  render() {
    return (
      <DatamapBox
        regionData={this.props.regionData}
        mapUi={this.props.mapUi}
      />
    )
  }
}

MapContainer.propTypes = {
  regionData: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(MapContainer)
