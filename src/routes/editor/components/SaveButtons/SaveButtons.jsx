import React, { Component } from 'react'
import { svgAsDataUri, saveSvgAsPng } from 'save-svg-as-png'

import style from './SaveButtons.css'

export default class SaveButtons extends Component {
  handleSavePng() {
    const options = { scale: 3, backgroundColor: 'white' }
    saveSvgAsPng(document.getElementsByTagName('svg')[0], 'datamapsco', options);
  }

  handleSaveSvg() {
    const a = document.createElement('a')
    const svg = document.getElementsByTagName('svg')[0]
    svgAsDataUri(svg, {}, (uri) => { a.href = uri })

    a.download = 'datamapsco'
    document.body.appendChild(a)
    a.addEventListener('click', () => a.parentNode.removeChild(a))
    a.click()
  }

  render() {
    return (
      <div>
        <button className={'button ' + style['save-btn']} onClick={this.handleSaveSvg}>Save svg</button>
        <button className={'button ' + style['save-btn']} onClick={this.handleSavePng}>Save png</button>
      </div>
    )
  }
}
