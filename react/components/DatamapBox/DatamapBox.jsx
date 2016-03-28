import React, { Component } from 'react'

import MapElements from './MapElements'

export default class DatamapBox extends Component {
  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)

    this.state = {
      containerWidth: null,
      minWidth: 500,
      maxWidth: 750,
    }
  }

  componentDidMount() {
    const { minWidth, maxWidth } = this.state
    const clientWidth = this.refs.DatamapBox.clientWidth
    const containerWidth = Math.min(Math.max(clientWidth, minWidth), maxWidth)
    this.setState({ containerWidth })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const containerWidth = this.refs.DatamapBox.clientWidth

    if (containerWidth > this.state.minWidth && containerWidth < this.state.maxWidth) {
      this.setState({ containerWidth: this.refs.DatamapBox.clientWidth })
    }
  }

  render() {
    const { containerWidth } = this.state
    const svgWidth = containerWidth || 0

    return (
      <div ref="DatamapBox">
        <MapElements
          svgWidth={svgWidth}
          svgHeight={svgWidth * 0.8}
        />
      </div>
    )
  }
}
