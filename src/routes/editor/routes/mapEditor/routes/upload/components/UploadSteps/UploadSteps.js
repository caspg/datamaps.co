import React, { PropTypes } from 'react'

import uploadSteps from 'config/constants/upload'
import style from './UploadSteps.css'

const UploadSteps = (props) => {
  const { currentStep, columnIndexes } = props
  const { CODE, NAME, VALUE } = uploadSteps

  const handleChangeStep = (event, type) => {
    event.preventDefault()

    const isCurrent = currentStep === type
    const isValue = type === uploadSteps.VALUE
    const isCodeOrNameSelected = columnIndexes[CODE] !== undefined ||
      columnIndexes[NAME] !== undefined

    if (isCurrent || (isValue && !isCodeOrNameSelected)) {
      return
    }

    props.onChangeStep(type)
  }

  const changeStepLink = (type, children) =>
    <a
      href="#"
      onClick={(e) => handleChangeStep(e, type)}
      className={style.skiplink}
    >
      {children}
    </a>

  const makeClassNAme = (base, stepName) => {
    const active = (currentStep === stepName) ? 'stepActive' : 'step'
    const selected = (columnIndexes[stepName] !== undefined) ? 'stepSelected' : ''

    return `${style[selected]} ${style[active]} ${style[base]}`
  }

  const isTypeSelected = (type) =>
    columnIndexes[type] !== undefined

  const getTypeClassName = (type) => ({
    [CODE]: makeClassNAme('code-step-title', CODE),
    [NAME]: makeClassNAme('name-step-title', NAME),
    [VALUE]: makeClassNAme('value-step-title', VALUE),
  }[type])

  const renderStep = (type, text) => {
    const isSelected = isTypeSelected(type)

    return (
      <div style={{ paddingLeft: isSelected ? '' : 20 }}>
        {isSelected && <div className={style.checkmark} />}
        <span className={getTypeClassName(type)}>
          Select {text}
        </span>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <div className="row middle-xs">

        <div className={style['step-group']}>
          <div className="row middle-xs">
            {changeStepLink(NAME, renderStep(NAME, 'names'))}
            <span className={style.slash}>{'/'}</span>
            {changeStepLink(CODE, renderStep(CODE, 'codes'))}
          </div>
        </div>

        <div className={style['step-group']}>
          <div className="row middle-xs">
            {changeStepLink(VALUE, renderStep(VALUE, 'values'))}
          </div>
        </div>

      </div>
    </div>
  )
}

UploadSteps.propTypes = {
  currentStep: PropTypes.string.isRequired,
  columnIndexes: PropTypes.shape({
    code: PropTypes.number,
    name: PropTypes.number,
    value: PropTypes.number,
  }),
  onChangeStep: PropTypes.func.isRequired,
}

export default UploadSteps
