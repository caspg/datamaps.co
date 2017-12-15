import React from 'react'
import PropTypes from 'prop-types'

import { grey300 } from '@src/styles/colors'

import UploadSteps from './components/UploadSteps'
import UploadInstructions from './components/UploadInstructions'

const DataUploadHeader = (props) => {
  const { currentStep, columnIndexes, onSkipStep, onChangeStep } = props

  return (
    <div className="DataUploadHeader">
      <UploadSteps
        currentStep={currentStep}
        columnIndexes={columnIndexes}
        onChangeStep={onChangeStep}
      />

      <UploadInstructions
        currentStep={currentStep}
        onSkipStep={onSkipStep}
      />

      <style jsx>{`
        .DataUploadHeader {
          background-color: white;
          min-height: 60px;
          padding: 20px;
          padding-left: 35px;
          border-bottom: 1px solid ${grey300};
        }
      `}</style>
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
