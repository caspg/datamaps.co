import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'

import { setMapType } from 'redux/actions'

class SelectMapContainer extends Component {
  handleMapSelect(e, mapType) {
    e.preventDefault()
    const { dispatch } = this.props

    dispatch(setMapType(mapType))
    dispatch(push(`/editor/${mapType}/edit-data`))
  }

  render() {
    return (
      <div>
        <h1>SelectMapContainer</h1>

        <a href="#" className="button" onClick={(e) => this.handleMapSelect(e, 'usa')}>USA</a>
        <a href="#" className="button" onClick={(e) => this.handleMapSelect(e, 'world')}>WORLD</a>
      </div>
    )
  }
}

SelectMapContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(SelectMapContainer)
