import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changeLinearNoDataColor } from 'redux/actions/mapUi'

import {
  changeMapTitle,
  changeLegendTitle,
  changeDataClassification,
  changeBorderColor,
} from 'redux/actions/mapUi'

import style from './CommonEditor.css'

import TitleEditor from '../components/TitleEditor/TitleEditor'
import DataClassificationSelect from '../components/DataClassificationSelect/DataClassificationSelect'
import ColorPickerRow from '../components/ColorPickerRow/ColorPickerRow'

class CommonEditor extends Component {
  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleClassificationChange = this.handleClassificationChange.bind(this)
    this.handleLegendTitleChange = this.handleLegendTitleChange.bind(this)
    this.handleNoDataColorChange = this.handleNoDataColorChange.bind(this)
    this.handleBorderColorChange = this.handleBorderColorChange.bind(this)
  }

  handleTitleChange(title) {
    this.props.dispatch(changeMapTitle(title))
  }

  handleLegendTitleChange(title) {
    this.props.dispatch(changeLegendTitle(title))
  }

  handleClassificationChange(classification) {
    this.props.dispatch(changeDataClassification(classification))
  }

  handleNoDataColorChange(color) {
    this.props.dispatch(changeLinearNoDataColor(color))
  }

  handleBorderColorChange(color) {
    this.props.dispatch(changeBorderColor(color))
  }

  render() {
    const noDataColor = this.props.mapUi.get('noDataColor')
    const borderColor = this.props.mapUi.get('borderColor')

    return (
      <div className={style.container}>
        <DataClassificationSelect
          dataClassification={this.props.mapUi.get('dataClassification')}
          onClassificationChange={this.handleClassificationChange}
        />
        <TitleEditor
          text={this.props.mapUi.get('title')}
          onChange={this.handleTitleChange}
          placeholder="Add a new title"
        />
        <TitleEditor
          text={this.props.mapUi.get('legendTitle')}
          onChange={this.handleLegendTitleChange}
          placeholder="Add a new legend title"
        />

        {this.props.children}

        <ColorPickerRow
          label="no data color:"
          color={noDataColor}
          onColorChange={this.handleNoDataColorChange}
        />

        <ColorPickerRow
          label="border's line color:"
          color={borderColor}
          onColorChange={this.handleBorderColorChange}
        />
      </div>
    )
  }
}

CommonEditor.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(CommonEditor)
