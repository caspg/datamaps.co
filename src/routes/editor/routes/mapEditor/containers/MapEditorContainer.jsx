import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { fetchTopoData } from 'redux/actions/topoData'

import MapEditorLayout from '../components/MapEditorLayout/MapEditorLayout'

class MapEditorContainer extends Component {
  isDataLoaded() {
    const { params, topoData, dispatch } = this.props
    const { mapType } = params
    const currentTopoData = topoData.get(mapType)

    if (typeof currentTopoData !== 'undefined') {
      return true
    }

    if (!topoData.get('isFetching')) {
      dispatch(fetchTopoData(mapType))
    }

    return false
  }

  render() {
    const { children, mapType } = this.props

    return (
      <div>
        {this.isDataLoaded() && <MapEditorLayout mapType={mapType} children={children} />}
      </div>
    )
  }
}

MapEditorContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  topoData: PropTypes.instanceOf(Map).isRequired,
  params: PropTypes.shape({
    mapType: PropTypes.string.isRequired,
  }),
  mapType: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    topoData: state.topoData,
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(MapEditorContainer)
