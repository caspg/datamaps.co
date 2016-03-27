import React, { Component } from 'react'

import MapWithLegend from './MapWithLegend'

export default class DatamapBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderMap: false,
      containerWidth: null,
    }
  }

  componentDidMount() {
    this.setState({
      containerWidth: this.refs.DatamapBox.clientWidth,
      renderMap: true,
    })
  }

  renderMapWithLegend(svgWidth, svgHeight) {
    return (
      <MapWithLegend
        svgWidth={svgWidth}
        svgHeight={svgHeight}
      />
    )
  }

  render() {
    const { containerWidth } = this.state
    const svgWidth = containerWidth ? Math.min(containerWidth, 800) : 0
    const svgHeight = svgWidth * 0.8
    const svgStyle = {
      width: svgWidth,
      height: svgHeight,
      backgroundColor: 'green',
    }

    return (
      <div ref="DatamapBox">
        <svg style={svgStyle}>
          {this.state.renderMap && this.renderMapWithLegend(svgWidth, svgHeight)}
        </svg>
      </div>
    )
  }
}
