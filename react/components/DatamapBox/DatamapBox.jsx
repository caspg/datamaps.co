import React, { Component } from 'react'

import MapElements from './MapElements'

export default class DatamapBox extends Component {
  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)

    this.state = {
      containerWidth: null,
    }
  }

  componentDidMount() {
    this.setState({ containerWidth: this.refs.DatamapBox.clientWidth })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ containerWidth: this.refs.DatamapBox.clientWidth })
  }

  render() {
    const maxWidth = 750
    const { containerWidth } = this.state
    const svgWidth = containerWidth ? Math.min(containerWidth, maxWidth) : 0

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
