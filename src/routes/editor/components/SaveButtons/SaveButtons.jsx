import React, { Component } from 'react'
import { saveSvgAsPng } from 'save-svg-as-png'

import style from './SaveButtons.css'

export default class SaveButtons extends Component {
  handleSavePng() {
    const options = { scale: 3, backgroundColor: 'white' }
    saveSvgAsPng(document.getElementsByTagName('svg')[0], 'datamapsco.png', options);
  }

  render() {
    return (
      <div>
        <button className={'button ' + style['png-btn']} onClick={this.handleSavePng}>Save png</button>
      </div>
    )
  }
}
