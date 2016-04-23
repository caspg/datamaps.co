import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as mapUiActions from '../actions/mapUi'
import colorbrewer from '../data/colorbrewer'
import ColorPickerRow from '../components/ColorPickerRow'
import ColorSchemePicker from '../components/ColorSchemePicker'

export class EquidistantScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
    this.handleNoDataColorChange = this.handleNoDataColorChange.bind(this)
  }

  handleNoDataColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearNoDataColor(color))
  }

  handlePalletePicked(palleteKey) {
    const classesCount = this.props.mapUi.getIn(['equidistant', 'classesCount'])
    const pallete = colorbrewer[palleteKey][classesCount]
    this.props.dispatch(mapUiActions.changeColorPallete(palleteKey, pallete))
  }

  render() {
    const { mapUi } = this.props
    const palleteKey = mapUi.getIn(['equidistant', 'palleteKey'])
    const noDataColor = mapUi.get('noDataColor')

    return (
      <div className="equidistant-colors-editor">
        <ColorSchemePicker
          palleteKey={palleteKey}
          palletePicked={this.handlePalletePicked}
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

EquidistantScaleEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(EquidistantScaleEditor)
