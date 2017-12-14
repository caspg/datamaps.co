import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { setMapType } from '@src/redux/actions'
import { fetchTopoData } from '@src/redux/actions/topoData'

import MapEditorLayout from './components/MapEditorLayout'

class MapEditorContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    topoData: PropTypes.instanceOf(Map).isRequired,
    params: PropTypes.shape({
      mapType: PropTypes.string.isRequired,
    }),

    children: PropTypes.node,
    mapType: PropTypes.string,
  }

  componentWillMount() {
    const { mapType, params, dispatch } = this.props
    if (!mapType) {
      dispatch(setMapType(params.mapType))
    }

    this.loadDataIfNecessary(this.props)
  }

  componentWillReceiveProps(nexProps) {
    this.loadDataIfNecessary(nexProps)
  }

  loadDataIfNecessary(props) {
    const { mapType, topoData, dispatch } = props
    const currentTopoData = topoData.get(mapType)

    if (!!mapType && typeof currentTopoData === 'undefined') {
      dispatch(fetchTopoData(mapType))
    }
  }

  isDataReady() {
    const { mapType, topoData } = this.props
    return (!!mapType && typeof topoData.get(mapType) !== 'undefined')
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <MapEditorLayout
          children={children}
          isDataReady={this.isDataReady()}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topoData: state.topoData,
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(MapEditorContainer)
