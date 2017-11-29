import React, { PropTypes } from 'react'

import uploadSteps from 'config/constants/upload'
import style from './GridActions.css'

const GridActions = (props) => {
  const { CODE, NAME, VALUE } = uploadSteps
  const { columnIndexes, currentStep } = props
  const isValueSelected = columnIndexes[VALUE] !== undefined
  const isCodeOrNameSelected = columnIndexes[CODE] !== undefined ||
    columnIndexes[NAME] !== undefined

  const nextButton = () => (
    <button
      className={style.button}
      disabled={!isCodeOrNameSelected}
      onClick={() => props.onChangeStep(VALUE)}
    >
      next
    </button>
  )

  const finishButton = () => (
    <button
      className={style.button}
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
    <div className={style.container}>
      {getCurrentAction()()}
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
