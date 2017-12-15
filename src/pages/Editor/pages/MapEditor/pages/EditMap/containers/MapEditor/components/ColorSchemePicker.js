import React, { Component, PropTypes } from 'react'

import colorbrewer from '@src/data/colorbrewer'
import { grey300 } from '@src/styles/colors'

import ColorPallete from './ColorPallete'

const multihueSchemes1 = ['BuGn', 'BuPu', 'GnBu', 'OrRd', 'PuBu', 'PuBuGn']
const multihueSchemes2 = ['PuRd', 'RdPu', 'YlGn', 'YlGnBu', 'YlOrBr', 'YlOrRd']
const singlehueSchemes = ['Blues', 'Greens', 'Greys', 'Oranges', 'Purples', 'Reds']

export default class ColorSchemePicker extends Component {
  renderPalletes(schemes) {
    return schemes.map((palleteKey, i) =>
      <ColorPallete
        key={i}
        activePalleteKey={this.props.palleteKey}
        palleteKey={palleteKey}
        pallete={colorbrewer[palleteKey][4]}
        palletePicked={this.props.palletePicked}
      />
    )
  }

  render() {
    return (
      <div className="ColorSchemePicker">
        <p>Select color scheme:</p>
        <div className="ColorSchemePicker__row">
          {this.renderPalletes(multihueSchemes1)}
        </div>
        <div className="ColorSchemePicker__row">
          {this.renderPalletes(multihueSchemes2)}
        </div>
        <div className="ColorSchemePicker__single-hue-row">
          {this.renderPalletes(singlehueSchemes)}
        </div>

        <style jsx>{`
          .ColorSchemePicker {
            margin-top: 20px;
            padding-left: 5px;
            display: inline-block;
          }

          .ColorSchemePicker__row {
            padding: 0 10px;
          }

          .ColorSchemePicker__single-hue-row {
            padding: 0 10px;
            margin-top: 10px;
            padding-top: 15px;
            border-top: 1px solid ${grey300};
          }
        `}</style>
      </div>
    )
  }
}

ColorSchemePicker.propTypes = {
  palleteKey: PropTypes.string.isRequired,
  palletePicked: PropTypes.func.isRequired,
}
