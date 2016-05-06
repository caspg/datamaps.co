import React, { PropTypes } from 'react'

import style from './DomainValueEditor.css'
import NumericInput from 'components/NumericInput/NumericInput'

const DomainValueEditor = (props) =>
  <div>
    <p className={style.paragraph}>{props.label}</p>
    <NumericInput
      value={props.value}
      onBlur={props.onDomainValueChange}
      placeholder={props.placeholder}
    />
  </div>

DomainValueEditor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  onDomainValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.number.isRequired,
}

export default DomainValueEditor;
