import React, { PropTypes } from 'react'

import NumericInput from '@src/components/NumericInput'

const DomainValueEditor = (props) =>
  <div>
    <p className="DomainValueEditor__paragraph">{props.label}</p>
    <NumericInput
      value={props.value}
      onBlur={props.onDomainValueChange}
      placeholder={props.placeholder}
    />

    <style jsx>{`
      .DomainValueEditor__paragraph {
        margin-top: 10px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>

DomainValueEditor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onDomainValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default DomainValueEditor;
