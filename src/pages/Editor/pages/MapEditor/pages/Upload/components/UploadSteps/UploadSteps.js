import React, { PropTypes } from 'react'

import { greyDark, orange200, lightGreen200, lightBlue200 } from '@src/styles/colors'
import uploadSteps from '@src/config/constants/upload'

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
      className="UploadSteps__skiplink"
    >
      {children}
    </a>

  const makeClassNAme = (base, stepName) => {
    const active = (currentStep === stepName)
      ? 'UploadSteps__stepActive'
      : 'UploadSteps__step'

    const selected = (columnIndexes[stepName] !== undefined)
      ? 'UploadSteps__stepSelected'
      : ''

    return `${selected} ${active} ${base}`
  }

  const isTypeSelected = (type) =>
    columnIndexes[type] !== undefined

  const getTypeClassName = (type) => ({
    [CODE]: makeClassNAme('UploadSteps__code-step-title', CODE),
    [NAME]: makeClassNAme('UploadSteps__name-step-title', NAME),
    [VALUE]: makeClassNAme('UploadSteps__value-step-title', VALUE),
  }[type])

  const renderStep = (type, text) => {
    const isSelected = isTypeSelected(type)

    return (
      <div style={{ paddingLeft: isSelected ? '' : 20 }}>
        {isSelected && <div className="UploadSteps__checkmark" />}
        <span className={getTypeClassName(type)}>
          Select {text}
        </span>
      </div>
    )
  }

  return (
    <div className="UploadSteps">
      <div className="row middle-xs">

        <div className="UploadSteps__step-group">
          <div className="row middle-xs">
            {changeStepLink(NAME, renderStep(NAME, 'names'))}
            <span className="UploadSteps__slash">{'/'}</span>
            {changeStepLink(CODE, renderStep(CODE, 'codes'))}
          </div>
        </div>

        <div className="UploadSteps__step-group">
          <div className="row middle-xs">
            {changeStepLink(VALUE, renderStep(VALUE, 'values'))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .UploadSteps {
          display: inline-block;
        }

        .UploadSteps__step-group {
          display: inline-block;
          margin-right: 50px;
          margin-left: 20px;
          margin-top: 20px;
        }

        .UploadSteps__slash {
          margin: 0 10px;
          margin-left: 20px;
        }
      `}</style>

      {/* TODO: maybe extract it to separate file */}
      <style jsx global>{`
        .UploadSteps__skiplink {
          text-decoration: none;
        }

        .UploadSteps__step {
          font-size: 1.2em;
          color: grey-color-500;
        }

        .UploadSteps__stepSelected {
          color: ${greyDark};
        }

        .UploadSteps__stepActive {
          font-size: 1.2em;
          color: grey-color-500;
          color: ${greyDark};
          font-weight: 600;
        }

        .UploadSteps__stepDone {
          font-size: 1.2em;
          color: grey-color-500;
          color: ${greyDark};
        }

        .UploadSteps__checkmark {
          padding: 5px;
          display:inline-block;
          margin-right: 5px;
        }

        .UploadSteps__checkmark:after {
          content: '';
          display: block;
          width: 3px;
          height: 6px;
          border: solid #000;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .UploadSteps__code-step-title {
          text-transform: uppercase;
          border-bottom: 2px solid ${orange200};
        }

        .UploadSteps__name-step-title {
          text-transform: uppercase;
          border-bottom: 2px solid ${lightGreen200};
        }

        .UploadSteps__value-step-title {
          text-transform: uppercase;
          border-bottom: 2px solid ${lightBlue200};
        }
      `}</style>
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
