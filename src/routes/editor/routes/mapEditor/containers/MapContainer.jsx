import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import makeExtremeValuesSelector from 'redux/selectors/extremeValues'
import DatamapBox from '../components/DatamapBox/DatamapBox'

const MapContainer = (props) =>
  <DatamapBox
    regionData={props.regionData}
    extremeValues={props.extremeValues}
    mapUi={props.mapUi}
    mapType={props.mapType}

  />

MapContainer.propTypes = {
  regionData: PropTypes.instanceOf(Map).isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
  mapType: PropTypes.string.isRequired,
}

const makeMapStateToProps = () => {
  const extremeValuesSelector = makeExtremeValuesSelector()
  const mapStateToProps = (state) => {
    return {
      regionData: state.regionData,
      extremeValues: extremeValuesSelector(state),
      mapUi: state.mapUi,
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(MapContainer)
