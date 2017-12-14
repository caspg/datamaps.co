import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import makeExtremeValuesSelector from '@src/redux/selectors/extremeValues'

import DatamapBox from './components/DatamapBox'

MapContainer.propTypes = {
  regionData: PropTypes.instanceOf(Map).isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
  mapType: PropTypes.string.isRequired,
  topoData: PropTypes.instanceOf(Map).isRequired,
}

function MapContainer(props) {
  return (
    <DatamapBox
      regionData={props.regionData.get(props.mapType, Map())}
      extremeValues={props.extremeValues}
      mapUi={props.mapUi}
      mapType={props.mapType}
      topoData={props.topoData}
    />
  )
}

const makeMapStateToProps = () => {
  const extremeValuesSelector = makeExtremeValuesSelector()
  const mapStateToProps = (state) => ({
    regionData: state.regionData,
    extremeValues: extremeValuesSelector(state),
    mapUi: state.mapUi,
    topoData: state.topoData,
    mapType: state.mapType,
  })

  return mapStateToProps
}

export default connect(makeMapStateToProps)(MapContainer)
