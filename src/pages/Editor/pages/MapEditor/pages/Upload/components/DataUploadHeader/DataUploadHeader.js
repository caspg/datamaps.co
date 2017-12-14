import React, { PropTypes } from 'react'

import style from './DataUploadHeader.css'
import UploadSteps from '../UploadSteps'
import UploadInstructions from '../UploadInstructions'

const DataUploadHeader = (props) => {
  const { currentStep, columnIndexes, onSkipStep, onChangeStep } = props

  return (
    <div className={style.container}>
      <UploadSteps
        currentStep={currentStep}
        columnIndexes={columnIndexes}
        onChangeStep={onChangeStep}
      />

      <UploadInstructions
        currentStep={currentStep}
        onSkipStep={onSkipStep}
      />
    </div>
  )
}

DataUploadHeader.propTypes = {
  currentStep: PropTypes.string.isRequired,
  columnIndexes: PropTypes.shape({
    code: PropTypes.number,
    name: PropTypes.number,
    value: PropTypes.number,
  }),
  onSkipStep: PropTypes.func.isRequired,
  onChangeStep: PropTypes.func.isRequired,
}

export default DataUploadHeader
