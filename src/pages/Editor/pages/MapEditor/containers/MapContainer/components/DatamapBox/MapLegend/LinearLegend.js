import React, { Component, PropTypes } from 'react'
import d3 from 'd3'
import { Map } from 'immutable'

export default class LinearLegend extends Component {
  linearColorScale(value) {
    const { mapUi } = this.props
    const startColor = mapUi.get('linear').get('startColor')
    const endColor = mapUi.get('linear').get('endColor')

    return (
      d3.scale.linear()
        .domain([0, 200])
        .range([startColor, endColor])
        .interpolate(d3.interpolateLab)(value)
    )
  }

  renderGradient() {
    return Array(40).fill().map((_, i) =>
      <rect
        key={i}
        x={this.props.svgWidth - 280 + i * 5}
        y={this.props.svgHeight - 50}
        width={5}
        height="10"
        fill={this.linearColorScale(i * 5)}
        stroke="none"
      />
    )
  }

  render() {
    const textStyle = { textAnchor: 'middle', fontSize: 10, fill: '#333' }
    const { extremeValues } = this.props
    const minVal = extremeValues.get('min')
    const maxVal = extremeValues.get('max')

    return (
      <g>
        <text x={this.props.svgWidth - 280} y={this.props.svgHeight - 60} style={textStyle}>
          {minVal}
        </text>
        <text x={this.props.svgWidth - 80} y={this.props.svgHeight - 60} style={textStyle}>
          {maxVal}
        </text>
        {this.renderGradient()}
      </g>
    )
  }
}

LinearLegend.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}
