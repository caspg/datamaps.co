import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { setMapType } from 'redux/actions'
import Header from 'components/editor/Header/Header'

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

    dispatch(push(`${mainPath}/${mapType}`))
  }

  render() {
    return (
      <Header
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
