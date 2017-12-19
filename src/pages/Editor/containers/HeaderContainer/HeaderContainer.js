import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Router } from '@routes'
import { setMapType } from '@src/redux/actions'

import EditorHeader from './components/EditorHeader'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.handleMapTypeChange = this.handleMapTypeChange.bind(this)
  }

  handleMapTypeChange(mapType) {
    const { dispatch, mainPath } = this.props

    if (this.props.mapType !== mapType) {
      dispatch(setMapType(mapType))
    }

    Router.pushRoute(`${mainPath}/${mapType}`)
  }

  render() {
    return (
      <EditorHeader
        currentPath={this.props.currentPath}
        mapType={this.props.mapType}
        onMapTypeChange={this.handleMapTypeChange}
      />
    )
  }
}

HeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapType: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  mainPath: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(HeaderContainer)
