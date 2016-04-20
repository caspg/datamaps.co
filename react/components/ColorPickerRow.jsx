import React, { PropTypes } from 'react'
import ColorPicker from './ColorPicker'

const ColorPickerRow = (props) =>
  <div className="color-picker-row">
    <span>{props.label}</span>
    <ColorPicker
      color={props.color}
      onColorChange={props.onColorChange}
    />
  </div>

ColorPickerRow.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
}

export default ColorPickerRow
