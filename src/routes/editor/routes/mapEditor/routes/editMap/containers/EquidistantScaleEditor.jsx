import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import * as mapUiActions from 'redux/actions/mapUi'
import colorbrewer from 'data/colorbrewer'
import ColorSchemePicker from '../components/ColorSchemePicker/ColorSchemePicker'
import DataClassesSelect from '../components/DataClassesSelect/DataClassesSelect'
import DomainValueEditor from '../components/DomainValueEditor/DomainValueEditor'
import makeExtremeValuesSelector from 'redux/selectors/extremeValues'

export class EquidistantScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
    this.handleClassesCountChange = this.handleClassesCountChange.bind(this)
    this.handleDomainStartValueChange = this.handleDomainStartValueChange.bind(this)
    this.handleDomainEndValueChange = this.handleDomainEndValueChange.bind(this)
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

  handleDomainEndValueChange(value) {
    this.props.dispatch(mapUiActions.changeDomainEndValue(value))
  }

  render() {
    const { mapUi, extremeValues } = this.props
    const palleteKey = mapUi.getIn(['equidistant', 'palleteKey'])
    const classesCount = mapUi.getIn(['equidistant', 'classesCount'])
    const customMin = mapUi.getIn(['equidistant', 'domainStartValue'])
    const customMax = mapUi.getIn(['equidistant', 'domainEndValue'])
    const min = extremeValues.get('min')
    const max = extremeValues.get('max')

    return (
      <div>
        <DataClassesSelect
          classesCount={classesCount}
          onClassesCountChange={this.handleClassesCountChange}
        />

        <DomainValueEditor
          label="Enter new domain start's value:"
          value={customMin}
          placeholder={min}
          onDomainValueChange={this.handleDomainStartValueChange}
        />

        <DomainValueEditor
          label="Enter new domain end's value:"
          value={customMax}
          placeholder={max}
          onDomainValueChange={this.handleDomainEndValueChange}
        />

        <ColorSchemePicker
          palleteKey={palleteKey}
          palletePicked={this.handlePalletePicked}
        />
      </div>
    )
  }
}

EquidistantScaleEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
}

const makeMapStateToProps = () => {
  const extremeValuesSelector = makeExtremeValuesSelector()
  const mapStateToProps = (state) => {
    return {
      extremeValues: extremeValuesSelector(state),
      mapUi: state.mapUi,
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(EquidistantScaleEditor)
