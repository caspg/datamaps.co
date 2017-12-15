import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import PropTypes from 'prop-types'

import { loadEmptyData } from '@src/redux/actions/regionData'

class MapEditorRegionDataContainer extends Component {
  componentDidMount() {
    const { regionData, dispatch, mapType, topoData } = this.props

    if (!regionData) {
      dispatch(loadEmptyData(mapType, topoData))
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

MapEditorRegionDataContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  regionData: PropTypes.instanceOf(Map),
  mapType: PropTypes.string.isRequired,
  topoData: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  const { regionData, mapType, topoData } = state
  const currentRegionData = regionData.get(mapType)
  const currentTopoData = topoData.get(mapType)

  return {
    regionData: currentRegionData,
    topoData: currentTopoData,
    mapType,
  }
}

export default connect(mapStateToProps)(MapEditorRegionDataContainer)
