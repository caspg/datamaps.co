import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { loadEmptyData } from 'redux/actions/regionData'

class MapEditorWrapper extends Component {
  componentWillMount() {
    const { regionData, dispatch, mapType, topoData } = this.props

    if (!regionData) {
      dispatch(loadEmptyData(mapType, topoData))
    }
  }

  render() {
    const { children } = this.props
    return children
  }
}

MapEditorWrapper.propTypes = {
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

export default connect(mapStateToProps)(MapEditorWrapper)
