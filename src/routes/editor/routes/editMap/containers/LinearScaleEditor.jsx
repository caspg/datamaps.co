import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as mapUiActions from 'redux/actions/mapUi'
import ColorPickerRow from '../components/ColorPickerRow/ColorPickerRow'

export class LinearScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handleStartColorChange = this.handleStartColorChange.bind(this)
    this.handleEndColorChange = this.handleEndColorChange.bind(this)
    this.handleNoDataColorChange = this.handleNoDataColorChange.bind(this)
  }

  handleStartColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearStartColor(color))
  }

  handleEndColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearEndColor(color))
  }

  handleNoDataColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearNoDataColor(color))
  }

  render() {
    const { mapUi } = this.props
    const startColor = mapUi.getIn(['linear', 'startColor'])
    const endColor = mapUi.getIn(['linear', 'endColor'])
    const noDataColor = mapUi.get('noDataColor')

    return (
      <div className="linear-colors-editor">
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

        <ColorPickerRow
          label="no data color:"
          color={noDataColor}
          onColorChange={this.handleNoDataColorChange}
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
