import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as mapUiActions from '@src/redux/actions/mapUi'

import ColorPickerRow from '../components/ColorPickerRow'

export class LinearScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handleStartColorChange = this.handleStartColorChange.bind(this)
    this.handleEndColorChange = this.handleEndColorChange.bind(this)
  }

  handleStartColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearStartColor(color))
  }

  handleEndColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearEndColor(color))
  }

  render() {
    const { mapUi } = this.props
    const startColor = mapUi.getIn(['linear', 'startColor'])
    const endColor = mapUi.getIn(['linear', 'endColor'])

    return (
      <div>
        <ColorPickerRow
          label="start color:"
          color={startColor}
          onColorChange={this.handleStartColorChange}
        />

        <ColorPickerRow
          label="end color:"
          color={endColor}
          onColorChange={this.handleEndColorChange}
        />
      </div>
    )
  }
}

LinearScaleEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(LinearScaleEditor)
