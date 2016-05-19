import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { setMapType } from 'redux/actions'

import EditorInitView from '../components/EditorInitView/EditorInitView'

class EditorInitContainer extends Component {
  constructor(props) {
    super(props)
    this.handleMapSelect = this.handleMapSelect.bind(this)
  }

  handleMapSelect(mapType) {
    const { dispatch } = this.props

    if (this.props.mapType !== mapType) {
      dispatch(setMapType(mapType))
    }

    dispatch(push(`/editor/${mapType}`))
  }

  render() {
    return (
      <EditorInitView handleMapSelect={this.handleMapSelect} />
    )
  }
}

EditorInitContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapType: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(EditorInitContainer)
