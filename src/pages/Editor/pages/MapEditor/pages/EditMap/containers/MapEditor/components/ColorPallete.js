import React, { Component, PropTypes } from 'react'

import { grey200, grey300 } from '@src/styles/colors'

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
    const className = isActive
      ? 'ColorPallete ColorPallete-active'
      : 'ColorPallete'

    return (
      <div
        className={className}
        onClick={this.handlePalletePicked}
      >
        {this.renderPallete()}

        <style jsx>{`
          .ColorPallete {
            display: inline-block;
            margin: 4px;
            border: 6px solid white;
            border-radius: 4px;
            cursor: pointer;
          }

          .ColorPallete:hover {
            border: 6px solid ${grey200};
          }

          .ColorPallete-active {
            border: 6px solid ${grey300} !important;
          }
        `}</style>
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
