import React, { Component } from 'react'

import ColorSchemePicker from '../components/ColorSchemePicker'

export default class EquidistantScaleEditor extends Component {
  render() {
    return (
      <div className="equidistant-colors-editor">
        <ColorSchemePicker />
      </div>
    )
  }
}
