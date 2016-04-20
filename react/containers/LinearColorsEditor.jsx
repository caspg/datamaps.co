import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changeLinearStartColor, changeLinearEndColor } from '../actions/mapUi'
import ColorPicker from '../components/ColorPicker'

export default class LinearColorsEditor extends Component {
  constructor(props) {
    super(props)
    this.handleStartColorChange = this.handleStartColorChange.bind(this)
    this.handleEndColorChange = this.handleEndColorChange.bind(this)
  }

  handleStartColorChange(color) {
    this.props.dispatch(changeLinearStartColor(color));
  }

  handleEndColorChange(color) {
    this.props.dispatch(changeLinearEndColor(color));
  }

  render() {
    const { mapUi } = this.props
    const startColor = mapUi.get('linear').get('startColor')
    const endColor = mapUi.get('linear').get('endColor')

    return (
      <div className="linear-colors-editor">
        <div className="color-picker-row">
          <span>start color: </span>
          <ColorPicker
            color={startColor}
            onColorChange={this.handleStartColorChange}
          />
        </div>

        <div className="color-picker-row">
          <span>end color: </span>
          <ColorPicker
            color={endColor}
            onColorChange={this.handleEndColorChange}
          />
        </div>
      </div>
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
