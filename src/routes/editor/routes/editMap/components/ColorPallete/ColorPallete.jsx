import React, { Component, PropTypes } from 'react'

import style from './ColorPallete.css'

export default class ColorPallete extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
  }

  handlePalletePicked() {
    this.props.palletePicked(this.props.palleteKey)
  }

  renderPallete() {
    return this.props.pallete.map((color, i) =>
      <div
        key={i}
        style={{ width: 20, height: 20, backgroundColor: color }}
      />
    )
  }

  render() {
    const { activePalleteKey, palleteKey } = this.props
    const isActive = (activePalleteKey === palleteKey)
    const className = isActive ? style['pallete-active'] : style.pallete

    return (
      <div
        className={className}
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
  palletePicked: PropTypes.func.isRequired,
}
