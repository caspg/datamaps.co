import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as mapUiActions from '../actions/mapUi'
import colorbrewer from '../data/colorbrewer'
import ColorPickerRow from '../components/ColorPickerRow'
import ColorSchemePicker from '../components/ColorSchemePicker'
import DataClassesSelect from '../components/DataClassesSelect'

export class EquidistantScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
    this.handleNoDataColorChange = this.handleNoDataColorChange.bind(this)
    this.handleClassesCountChange = this.handleClassesCountChange.bind(this)
  }

  handleNoDataColorChange(color) {
    this.props.dispatch(mapUiActions.changeLinearNoDataColor(color))
  }

  handlePalletePicked(palleteKey) {
    const classesCount = this.props.mapUi.getIn(['equidistant', 'classesCount'])
    const pallete = colorbrewer[palleteKey][classesCount]
    this.props.dispatch(mapUiActions.changeColorPallete(palleteKey, pallete))
  }

  handleClassesCountChange(count) {
    const palleteKey = this.props.mapUi.getIn(['equidistant', 'palleteKey'])
    const pallete = colorbrewer[palleteKey][count]
    this.props.dispatch(mapUiActions.changeClassesCount(count, pallete))
  }

  render() {
    const { mapUi } = this.props
    const palleteKey = mapUi.getIn(['equidistant', 'palleteKey'])
    const noDataColor = mapUi.get('noDataColor')
    const classesCount = mapUi.getIn(['equidistant', 'classesCount'])

    return (
      <div className="equidistant-colors-editor">
        <DataClassesSelect
          classesCount={classesCount}
          onClassesCountChange={this.handleClassesCountChange}
        />

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
