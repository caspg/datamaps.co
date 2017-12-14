import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'

export default class EquidistantLegend extends Component {
  renderLegend() {
    const rectWidth = 40
    const textStyle = {
      textAnchor: 'middle',
      fontSize: 9,
      fill: '#333',
    }
    const { extremeValues, mapUi } = this.props
    const classesCount = mapUi.getIn(['equidistant', 'classesCount'])
    const minVal = extremeValues.get('customMin') || extremeValues.get('min')
    const maxVal = extremeValues.get('customMax') || extremeValues.get('max')
    const interval = (maxVal - minVal) / classesCount
    const colorPallete = mapUi.getIn(['equidistant', 'pallete'])
    const startingPoint = rectWidth * classesCount + 80

    const legend = colorPallete.map((color, i) =>
      <g key={i}>
        <text
          key={i + 100}
          x={this.props.svgWidth - startingPoint + rectWidth * i}
          y={this.props.svgHeight - 60}
          style={textStyle}
        >
          {Math.round((minVal + interval * i) * 100) / 100}
        </text>
        <rect
          key={i + 1000}
          x={this.props.svgWidth - startingPoint + rectWidth * i}
          y={this.props.svgHeight - 50}
          width={rectWidth}
          height="10"
          fill={color}
        />
      </g>
    )

    legend.push(
      <text
        key={999}
        x={this.props.svgWidth - startingPoint + rectWidth * classesCount}
        y={this.props.svgHeight - 60}
        style={textStyle}
      >
        {maxVal}
      </text>
    )

    return legend
  }

  render() {
    return (
      <g>{this.renderLegend()}</g>
    )
  }
}

EquidistantLegend.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}
