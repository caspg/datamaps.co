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

    dispatch(fetchTopoData(mapType))
    return false
  }

  render() {
    return (
      <div>
        {this.isDataLoaded() && <MapEditorLayout children={this.props.children} />}
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
}

function mapStateToProps(state) {
  return {
    topoData: state.topoData,
  }
}

export default connect(mapStateToProps)(MapEditorContainer)
