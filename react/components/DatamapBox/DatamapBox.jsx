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

  render() {
    const svgWidth = this.state.containerWidth ? Math.min(this.state.containerWidth, 800) : 0
    const svgStyle = {
      width: svgWidth,
      height: svgWidth * 0.8,
      backgroundColor: 'green',
    }

    return (
      <div ref="DatamapBox">
        <svg style={svgStyle}>
          {this.state.renderMap && <MapWithLegend />}
        </svg>
      </div>
    )
  }
}
