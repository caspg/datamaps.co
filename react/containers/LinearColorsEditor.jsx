import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class LinearColorsEditor extends Component {
  render() {
    return (
      <div>LinearColorsEditor</div>
    )
  }
}

LinearColorsEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(LinearColorsEditor)
