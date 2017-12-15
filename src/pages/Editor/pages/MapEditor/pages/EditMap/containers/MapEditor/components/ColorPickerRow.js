import React, { PropTypes } from 'react'

import ColorPicker from './ColorPicker'

const ColorPickerRow = (props) =>
  <div className="row ColorPickerRow">
    <div className="col-xs-6">
      <span>{props.label}</span>
    </div>
    <div className="col-xs-4">
      <ColorPicker
        color={props.color}
        onColorChange={props.onColorChange}
      />
    </div>

    <style jsx>{`
      .ColorPickerRow {
        margin-top: 15px;
      }
    `}</style>
  </div>

ColorPickerRow.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
}

export default ColorPickerRow
