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
    const { activePalleteKey, palleteKey } = this.props
    const isActive = (activePalleteKey === palleteKey)
    const activeClass = isActive ? 'active-pallete' : ''

    return (
      <div
        className={`color-pallete ${activeClass}`}
        onClick={this.handlePalletePicked}
      >
        {this.renderPallete()}
      </div>
    )
  }
}

ColorPallete.propTypes = {
  pallete: PropTypes.array.isRequired,
  palleteKey: PropTypes.string.isRequired,
  activePalleteKey: PropTypes.string.isRequired,
  colorPalletePicked: PropTypes.func.isRequired,
}
