import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Record } from 'immutable'

import { uploadDataAndRedirect } from '@src/redux/actions/regionData'
import uploadSteps from '@src/config/constants/upload'

import DataUploadLayout from '../components/DataUploadLayout'

const ColumnIndexes = Record({
  [uploadSteps.CODE]: undefined,
  [uploadSteps.NAME]: undefined,
  [uploadSteps.VALUE]: undefined,
})

class DataUploadContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: uploadSteps.NAME,
      columnIndexes: new ColumnIndexes(),
    }

    this.handleColumnClick = this.handleColumnClick.bind(this)
    this.handleSkipStep = this.handleSkipStep.bind(this)
    this.handleChangeStep = this.handleChangeStep.bind(this)
    this.handleFinishUpload = this.handleFinishUpload.bind(this)
  }

  handleColumnClick(index) {
    const { CODE, NAME } = uploadSteps
    const { currentStep, columnIndexes } = this.state

    const newColumnIndexes = () => {
      switch (currentStep) {
        case CODE:
          return columnIndexes.set(CODE, index).set(NAME, undefined)

        case NAME:
          return columnIndexes.set(NAME, index).set(CODE, undefined)

        default:
          return columnIndexes.set(currentStep, index)
      }
    }

    this.setState({
      columnIndexes: newColumnIndexes(),
    })
  }

  handleSkipStep(type) {
    const { columnIndexes } = this.state
    const { VALUE, CODE, NAME } = uploadSteps

    const newColumnIndexes = (type === VALUE) ?
      columnIndexes.set(VALUE, undefined) :
      columnIndexes.merge({ [CODE]: undefined, [NAME]: undefined })

    this.setState({
      currentStep: type,
      columnIndexes: newColumnIndexes,
    })
  }

  handleChangeStep(type) {
    this.setState({
      currentStep: type,
    })
  }

  columnAreSelected() {
    const { columnIndexes } = this.state
    const { VALUE, CODE, NAME } = uploadSteps

    return columnIndexes[VALUE] !== undefined && (
      columnIndexes[CODE] !== undefined || columnIndexes[NAME] !== undefined
    )
  }

  handleFinishUpload() {
    if (!this.columnAreSelected()) {
      return
    }

    const { dispatch, mapType, data } = this.props
    const { columnIndexes } = this.state
    const { CODE, NAME } = uploadSteps

    const idKey = (columnIndexes[CODE] !== undefined) ? CODE : NAME

    const payload = {
      data,
      idKey,
      columnIndexes,
    }

    dispatch(uploadDataAndRedirect(payload, mapType))
  }

  render() {
    const { columnIndexes, currentStep } = this.state;

    return (
      <DataUploadLayout
        data={this.props.data}
        currentStep={currentStep}
        columnIndexes={columnIndexes}
        onColumnClick={this.handleColumnClick}
        onSkipStep={this.handleSkipStep}
        onChangeStep={this.handleChangeStep}
        onFinishUpload={this.handleFinishUpload}
      />
    )
  }
}

DataUploadContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  mapType: PropTypes.string.isRequired,
}

export default connect()(DataUploadContainer)
