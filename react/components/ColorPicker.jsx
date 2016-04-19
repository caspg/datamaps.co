import React, { Component, PropTypes } from 'react'
import { SketchPicker } from 'react-color'

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
    this.setState({ color: '#' + color.hex })
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
    const swatchStyle = {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    }

    const swatchColor = {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: this.state.color,
    }

    const colorPickerStyle = {
      position: 'absolute',
      left: 0,
      top: 40,
      zIndex: 1001,
    }

    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <div ref="swatch" style={swatchStyle} onClick={this.handleSwatchClick}>
          <div style={swatchColor} />
        </div>
        <div ref="colorPickerContainer" style={colorPickerStyle}>
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
