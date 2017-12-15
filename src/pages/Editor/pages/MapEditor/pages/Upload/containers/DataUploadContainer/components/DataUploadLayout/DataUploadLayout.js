import React from 'react'
import PropTypes from 'prop-types'

import DataUploadHeader from './components/DataUploadHeader'
import DataUploadGrid from './components/DataUploadGrid'
import GridActions from './components/GridActions'

const DataUploadLayout = props => (
  <div>
    <DataUploadHeader
      currentStep={props.currentStep}
      columnIndexes={props.columnIndexes}
      onSkipStep={props.onSkipStep}
      onChangeStep={props.onChangeStep}
    />

    <GridActions
      onChangeStep={props.onChangeStep}
      onFinishUpload={props.onFinishUpload}
      currentStep={props.currentStep}
      columnIndexes={props.columnIndexes}
      currentStep={props.currentStep}
    />

    <DataUploadGrid
      data={props.data}
      currentStep={props.currentStep}
      onColumnClick={props.onColumnClick}
      columnIndexes={props.columnIndexes}
    />
  </div>
)

DataUploadLayout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentStep: PropTypes.string.isRequired,
  onColumnClick: PropTypes.func.isRequired,
  columnIndexes: PropTypes.shape({
    code: PropTypes.number,
    name: PropTypes.number,
    value: PropTypes.number,
  }),
  onSkipStep: PropTypes.func.isRequired,
  onChangeStep: PropTypes.func.isRequired,
  onFinishUpload: PropTypes.func.isRequired,
}

export default DataUploadLayout
