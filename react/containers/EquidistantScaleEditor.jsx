import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as mapUiActions from '../actions/mapUi'
import colorbrewer from '../data/colorbrewer'
import ColorPickerRow from '../components/ColorPickerRow'
import ColorSchemePicker from '../components/ColorSchemePicker'
import DataClassesSelect from '../components/DataClassesSelect'
import NumericInput from '../components/NumericInput'

export class EquidistantScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
    this.handleNoDataColorChange = this.handleNoDataColorChange.bind(this)
    this.handleClassesCountChange = this.handleClassesCountChange.bind(this)
    this.handleDomainStartValueChange = this.handleDomainStartValueChange.bind(this)
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

  handleDomainStartValueChange(value) {
    this.props.dispatch(mapUiActions.changeDomainStartValue(value))
  }

  render() {
    const { mapUi } = this.props
    const palleteKey = mapUi.getIn(['equidistant', 'palleteKey'])
    const noDataColor = mapUi.get('noDataColor')
    const classesCount = mapUi.getIn(['equidistant', 'classesCount'])
    const customMin = mapUi.getIn(['equidistant', 'customMin'])

    return (
      <div className="equidistant-colors-editor">
        <DataClassesSelect
          classesCount={classesCount}
          onClassesCountChange={this.handleClassesCountChange}
        />

        <div>
          <p>
            Enter new domain start's value:
          </p>
          <NumericInput
            value={customMin}
            onBlur={this.handleDomainStartValueChange}
            placeholder={extremeValues.get('min')}
          />
        </div>

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
    extremeValues: state.extremeValues,
  }
}

export default connect(mapStateToProps)(EquidistantScaleEditor)
