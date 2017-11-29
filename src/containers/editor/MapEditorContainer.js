import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { setMapType } from 'redux/actions'
import { fetchTopoData } from 'redux/actions/topoData'

import mapTypes from 'config/maps'
import metaTags from 'config/meta'
import MapEditorLayout from 'components/editor/MapEditorLayout/MapEditorLayout'

class MapEditorContainer extends Component {
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

  updateMetaTags() {
    const { displayName } = mapTypes.types.find(i => i.code === this.props.params.mapType)
    document.title = metaTags.titles.mapEditor.replace('{{mapType}}', displayName)
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
    this.updateMetaTags()
    const { children } = this.props

    return (
      <div>
        {this.isDataReady() && <MapEditorLayout children={children} />}
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
  mapType: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    topoData: state.topoData,
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(MapEditorContainer)
