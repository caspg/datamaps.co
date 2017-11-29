import React, { Component, PropTypes } from 'react'
import { SketchPicker } from 'react-color'

import style from './ColorPicker.css'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.handleSwatchClick = this.handleSwatchClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)

    this.state = {
      displayColorPicker: false,
      color: this.props.color,
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick)
  }

  handleSwatchClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleChange(color) {
    this.setState({ color: color.hex })
  }

  handleOutsideClick(e) {
    const colorPickerContainer = this.refs.colorPickerContainer
    const swatch = this.refs.swatch

    if (!colorPickerContainer.contains(e.target) && !swatch.contains(e.target) && this.state.displayColorPicker) {
      this.setState({ displayColorPicker: false })
      this.props.onColorChange(this.state.color)
    }
  }

  renderColorPicker() {
    return (
      <SketchPicker
        color={this.state.color}
        onChange={this.handleChange}
      />
    )
  }

  render() {
    const colorPickerStyle = {
      left: 0,
      top: 30,
    }

    return (
      <div className={style.container}>
        <div ref="swatch" className={style.swatch} onClick={this.handleSwatchClick}>
          <div className={style['swatch-color']} style={{ background: this.state.color }} />
        </div>
        <div ref="colorPickerContainer" className={style.picker} style={colorPickerStyle}>
          {this.state.displayColorPicker && this.renderColorPicker()}
        </div>
      </div>
    )
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
}
