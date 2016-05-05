import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import DatamapBox from '../components/DatamapBox/DatamapBox'

const MapContainer = (props) =>
  <DatamapBox
    regionData={props.regionData}
    extremeValues={props.extremeValues}
    mapUi={props.mapUi}
  />

MapContainer.propTypes = {
  regionData: PropTypes.instanceOf(Map).isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
    extremeValues: state.extremeValues,
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(MapContainer)
