import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import DatamapBox from '../components/DatamapBox'

class MapContainer extends Component {
  render() {
    return (
      <DatamapBox
        regionData={this.props.regionData}
      />
    )
  }
}

MapContainer.propTypes = {
  regionData: PropTypes.instanceOf(List).isRequired,
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
  }
}

export default connect(mapStateToProps)(MapContainer)
