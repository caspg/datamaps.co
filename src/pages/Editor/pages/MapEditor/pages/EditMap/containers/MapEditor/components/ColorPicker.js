import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import PropTypes from 'prop-types'

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
      <div className="ColorPicker">
        <div ref="swatch" className="ColorPicker__swatch" onClick={this.handleSwatchClick}>
          <div className="ColorPicker__swatch-color" style={{ background: this.state.color }} />
        </div>
        <div ref="colorPickerContainer" className="ColorPicker__picker" style={colorPickerStyle}>
          {this.state.displayColorPicker && this.renderColorPicker()}
        </div>

        <style jsx>{`
          .ColorPicker {
            display: inline-block;
            position: relative;
          }

          .ColorPicker__swatch {
            padding: 5px;
            background: #fff;
            border-radius: 1px;
            box-shadow: 0 0 0 1px rgba(0,0,0,.1);
            display: inline-block;
            cursor: pointer;
          }

          .ColorPicker__swatch-color {
            width: 36px;
            height: 14px;
            border-radius: 2px;
          }

          .ColorPicker__picker {
            position: absolute;
            z-index: 1001;
            top: 5px;
            left: -176px !important;
          }
        `}</style>
      </div>
    )
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired,
}
