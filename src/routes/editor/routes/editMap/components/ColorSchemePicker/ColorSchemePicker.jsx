import React, { Component, PropTypes } from 'react'

import style from './ColorSchemePicker.css'
import ColorPallete from '../ColorPallete/ColorPallete'
import colorbrewer from 'data/colorbrewer'

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
      <div className={style.container}>
        <p>Select color scheme:</p>
        <div className={style.row}>
          {this.renderPalletes(multihueSchemes1)}
        </div>
        <div className={style.row}>
          {this.renderPalletes(multihueSchemes2)}
        </div>
        <div className={style['single-hue-row']}>
          {this.renderPalletes(singlehueSchemes)}
        </div>
      </div>
    )
  }
}

ColorSchemePicker.propTypes = {
  palleteKey: PropTypes.string.isRequired,
  palletePicked: PropTypes.func.isRequired,
}
