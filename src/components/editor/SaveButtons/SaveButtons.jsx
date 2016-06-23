import React, { Component, PropTypes } from 'react'
import { svgAsDataUri, saveSvgAsPng } from 'save-svg-as-png'

import style from './SaveButtons.css'

export default class SaveButtons extends Component {
  constructor(props) {
    super(props)
    this.handleSaveSvg = this.handleSaveSvg.bind(this)
    this.handleSavePng = this.handleSavePng.bind(this)
  }

  trackEvent(type) {
    console.log(this.props.mapType)
    if (process.env.NODE_ENV !== 'production') return
    ga('send', {
      hitType: 'event',
      eventCategory: 'Save Button',
      eventAction: type,
      eventLabel: this.props.mapType,
    });
  }

  handleSavePng() {
    const gElement = document.getElementById('root-svg-group')
    const scaleFactor = gElement.getBoundingClientRect().width / gElement.getBBox().width
    const scale = 3 * scaleFactor

    const options = { scale: scale, backgroundColor: 'white' }
    saveSvgAsPng(document.getElementsByTagName('svg')[0], 'datamapsco', options);
    this.trackEvent('PNG')
  }

  handleSaveSvg() {
    const a = document.createElement('a')
    const svg = document.getElementsByTagName('svg')[0]
    svgAsDataUri(svg, {}, (uri) => { a.href = uri })

    a.download = 'datamapsco'
    document.body.appendChild(a)
    a.addEventListener('click', () => a.parentNode.removeChild(a))
    a.click()
    this.trackEvent('SVG')
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

SaveButtons.propTypes = {
  mapType: PropTypes.string.isRequired,
}
