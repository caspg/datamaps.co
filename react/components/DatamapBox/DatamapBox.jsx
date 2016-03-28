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
    window.addEventListener('resize', this.handleResize)
  }

  componentWillReceiveProps() {
    const containerWidth = this.currentContainerWidth()
    this.setState({ containerWidth })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const containerWidth = this.currentContainerWidth()
    if (containerWidth !== this.state.containerWidth) {
      this.setState({ containerWidth })
    }
  }

  currentContainerWidth() {
    const { minWidth, maxWidth } = this.state
    const clientWidth = this.refs.DatamapBox.clientWidth
    return Math.min(Math.max(clientWidth, minWidth), maxWidth)
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
