import React, { Component, PropTypes } from 'react'

export default class ColorPallete extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
  }

  handlePalletePicked() {
    this.props.colorPalletePicked(this.props.palleteKey)
  }

  renderPallete() {
    return this.props.pallete.map((color) =>
      <div
        style={{ width: 20, height: 20, 'background-color': color }}
      />
    )
  }

  render() {
    const palleteStyle = {
      display: 'inline-block',
      margin: 5,
    }

    return (
      <div
        className="color-pallete"
        onClick={this.handlePalletePicked}
        style={palleteStyle}
      >
        {this.renderPallete()}
      </div>
    )
  }
}

ColorPallete.propTypes = {
  palleteKey: PropTypes.string.isRequired,
  colorPalletePicked: PropTypes.func.isRequired,
  pallete: PropTypes.array.isRequired,
}
