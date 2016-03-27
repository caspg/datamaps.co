import React, { Component } from 'react'

import MapElements from './MapElements'

export default class DatamapBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      containerWidth: null,
    }
  }

  componentDidMount() {
    this.setState({ containerWidth: this.refs.DatamapBox.clientWidth })
  }

  render() {
    const { containerWidth } = this.state
    const svgWidth = containerWidth ? Math.min(containerWidth, 800) : 0

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
