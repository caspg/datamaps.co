import React from 'react';
import PropTypes from 'prop-types'

import uploadSteps from '@src/config/constants/upload'

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
    <div className="UploadInstructions">
      {renderInstruction()}

      <style jsx>{`
        .UploadInstructions {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

UploadInstructions.propTypes = {
  currentStep: PropTypes.string.isRequired,
  onSkipStep: PropTypes.func.isRequired,
};

export default UploadInstructions;
