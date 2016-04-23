import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ColorSchemePicker from '../components/ColorSchemePicker'

export default class EquidistantScaleEditor extends Component {
  render() {
    const palleteKey = this.props.mapUi.getIn(['equidistant', 'palleteKey'])

    return (
      <div className="equidistant-colors-editor">
        <ColorSchemePicker palleteKey={palleteKey} />
      </div>
    )
  }
}

EquidistantScaleEditor.propTypes = {
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(EquidistantScaleEditor)
