import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { createSelector } from 'reselect'

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

const getRegionData = (state) => state.regionData
const extremeValuesSelector = createSelector(
  [getRegionData],
  (regionData) => {
    const values = regionData.map((item) => item.get('value'))
    const filteredValues = values.filterNot((item) => item === '')
    return Map({ min: filteredValues.min(), max: filteredValues.max() })
  }
)

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
    extremeValues: extremeValuesSelector(state),
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(MapContainer)
