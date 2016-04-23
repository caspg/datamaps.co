import React, { Component, PropTypes } from 'react'

import ColorPallete from './ColorPallete'
import colorbrewer from '../data/colorbrewer'

const multihueSchemes1 = ['BuGn', 'BuPu', 'GnBu', 'OrRd', 'PuBu', 'PuBuGn']
const multihueSchemes2 = ['PuRd', 'RdPu', 'YlGn', 'YlGnBu', 'YlOrBr', 'YlOrRd']
const singlehueSchemes = ['Blues', 'Greens', 'Greys', 'Oranges', 'Purples', 'Reds']

export default class ColorSchemePicker extends Component {
  renderPalletes(schemes) {
    return schemes.map((key) =>
      <ColorPallete
        palleteKey={key}
        pallete={colorbrewer[key][4]}
        colorPalletePicked={this.props.colorPalletePicked}
      />
    )
  }

  render() {
    return (
      <div className="colors-scheme-picker">
        <p>Select color scheme:</p>
        <div className="schemes-row">
          {this.renderPalletes(multihueSchemes1)}
        </div>
        <div className="schemes-row">
          {this.renderPalletes(multihueSchemes2)}
        </div>
        <div className="schemes-row single-hues-schemes">
          {this.renderPalletes(singlehueSchemes)}
        </div>
      </div>
    )
  }
}

ColorSchemePicker.propTypes = {
  colorPalletePicked: PropTypes.func.isRequired,
}
