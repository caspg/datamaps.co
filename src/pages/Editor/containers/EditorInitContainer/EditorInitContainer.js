import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Router } from '@routes'
import { setMapType } from '@src/redux/actions'

import EditorInitView from './components/EditorInitView'

class EditorInitContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    mapType: PropTypes.string.isRequired,
    mainPath: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleMapSelect = this.handleMapSelect.bind(this)
  }

  handleMapSelect(mapType) {
    const { dispatch, mainPath } = this.props

    if (this.props.mapType !== mapType) {
      dispatch(setMapType(mapType))
    }

    Router.pushRoute(`${mainPath}/${mapType}`)
  }

  render() {
    return (
      <EditorInitView
        handleMapSelect={this.handleMapSelect}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(EditorInitContainer)
