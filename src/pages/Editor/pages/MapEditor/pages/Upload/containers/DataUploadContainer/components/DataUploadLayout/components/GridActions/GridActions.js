import React from 'react'
import PropTypes from 'prop-types'

import uploadSteps from '@src/config/constants/upload'
import { grey500, greyDark, lightBlue50, lightBlue200 } from '@src/styles/colors'

const GridActions = (props) => {
  const { CODE, NAME, VALUE } = uploadSteps
  const { columnIndexes, currentStep } = props
  const isValueSelected = columnIndexes[VALUE] !== undefined
  const isCodeOrNameSelected = columnIndexes[CODE] !== undefined ||
    columnIndexes[NAME] !== undefined

  const nextButton = () => (
    <button
      className="GridActions__button"
      disabled={!isCodeOrNameSelected}
      onClick={() => props.onChangeStep(VALUE)}
    >
      next
    </button>
  )

  const finishButton = () => (
    <button
      className="GridActions__button"
      disabled={!isValueSelected}
      onClick={() => props.onFinishUpload()}
    >
      finish upload
    </button>
  )

  const getCurrentAction = () => {
    if (uploadSteps.VALUE === currentStep) {
      return finishButton
    }

    return (isCodeOrNameSelected && isValueSelected) ? finishButton : nextButton
  }

  return (
    <div className="GridActions">
      {getCurrentAction()()}

      <style jsx global>{`
        .GridActions {
          margin-top: 30px;
          margin-left: 35px;
        }

        .GridActions__button {
          color: ${greyDark};
          background-color: ${lightBlue200};
          border-color: ${lightBlue200};
          margin: 0;
        }

        .GridActions__button:focus,
        .GridActions__button:hover {
          background-color: ${lightBlue200};
          border-color: ${lightBlue200};
        }

        .GridActions__button:hover:disabled,
        .GridActions__button:disabled {
          color: ${grey500};
          background-color: ${lightBlue50};
          border-color: ${lightBlue50};
        }
      `}</style>
    </div>
  )
}

GridActions.propTypes = {
  columnIndexes: PropTypes.shape({
    code: PropTypes.number,
    name: PropTypes.number,
  }),
  onChangeStep: PropTypes.func.isRequired,
  onFinishUpload: PropTypes.func.isRequired,
  currentStep: PropTypes.string.isRequired,
}

export default GridActions
