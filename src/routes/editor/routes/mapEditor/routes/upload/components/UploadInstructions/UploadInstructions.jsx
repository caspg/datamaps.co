import React, { PropTypes } from 'react';

import uploadSteps from 'config/constants/upload'
import style from './UploadInstructions.css'

const UploadInstructions = (props) => {
  const handleSkipStep = (event, type) => {
    event.preventDefault()
    props.onSkipStep(type)
  }

  const skipLink = (type, name) =>
    <a
      href="#"
      onClick={(e) => handleSkipStep(e, type)}
    >
      {name}
    </a>

  const codeInstruction = (
    <div>
      First, please select column which contains region's <b>codes</b>.
      If your dataset doesn't contain codes, you can skip this step
      and choose {skipLink(uploadSteps.NAME, 'names')}.
    </div>
  )

  const nameInstruction = (
    <div>
      First, please select column which contains region's <b>names</b>.
      If your dataset doesn't contain codes, you can skip this step
      and choose {skipLink(uploadSteps.CODE, 'codes')}.
    </div>
  )

  const valueInstruction = (
    <div>
      Please select column which contains <b>values</b>.
    </div>
  )

  const renderInstruction = () => {
    const instructions = {
      [uploadSteps.CODE]: codeInstruction,
      [uploadSteps.NAME]: nameInstruction,
      [uploadSteps.VALUE]: valueInstruction,
    }

    return instructions[props.currentStep]
  }

  return (
    <div className={style.container}>
      {renderInstruction()}
    </div>
  );
};

UploadInstructions.propTypes = {
  currentStep: PropTypes.string.isRequired,
  onSkipStep: PropTypes.func.isRequired,
};

export default UploadInstructions;
