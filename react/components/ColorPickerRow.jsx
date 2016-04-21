import React, { PropTypes } from 'react'
import ColorPicker from './ColorPicker'

const ColorPickerRow = (props) =>
  <div className="color-picker-row row">
    <div className="col-xs-4">
      <span>{props.label}</span>
    </div>
    <div className="col-xs-4">
      <ColorPicker
        color={props.color}
        onColorChange={props.onColorChange}
      />
    </div>
  </div>

ColorPickerRow.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
}

export default ColorPickerRow
