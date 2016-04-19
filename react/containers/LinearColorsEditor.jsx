import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ColorPicker from '../components/ColorPicker'

export default class LinearColorsEditor extends Component {
  constructor(props) {
    super(props)
    this.handleStartColorChange = this.handleStartColorChange.bind(this)
  }

  handleStartColorChange(color) {

  }

  render() {
    const { mapUi } = this.props
    const startColor = mapUi.get('linear').get('startColor')

    return (
      <div>
        <ColorPicker
          color={startColor}
          onColorChange={this.handleStartColorChange}
        />
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
