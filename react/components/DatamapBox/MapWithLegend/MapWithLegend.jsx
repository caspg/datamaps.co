import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'
import d3 from 'd3'

import Datamap from './Datamap'
import LinearLegend from './MapLegend/LinearLegend'

export default class MapWithLegend extends Component {
  extremeValues() {
    const { regionData } = this.props
    const values = regionData.map((item) => item.get('value'))
    const filteredValues = values.filterNot((item) => item === null)

    return Map({ min: filteredValues.min(), max: filteredValues.max() })
  }

  linearScale(extremeValues) {
    const { mapUi } = this.props
    const startColor = mapUi.get('linear').get('startColor')
    const endColor = mapUi.get('linear').get('endColor')

    return d3.scale.linear()
      .domain([extremeValues.get('min'), extremeValues.get('max')])
      .range([startColor, endColor])
      .interpolate(d3.interpolateLab)
  }

  colorScale(extremeValues) {
    const scales = {
      linear: this.linearScale(extremeValues),
    }

    const dataClassification = this.props.mapUi.get('dataClassification')
    return scales[dataClassification]
  }

  render() {
    const extremeValues = this.extremeValues()
    const colorScale = this.colorScale(extremeValues)

    const { svgWidth, svgHeight, mapUi } = this.props
    const noDataColor = mapUi.get('noDataColor')

    return (
      <g>
        <Datamap
          regionData={this.props.regionData}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          colorScale={colorScale}
          noDataColor={noDataColor}
          mouseMoveOnDatamap={this.props.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.props.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.props.mouseLeaveDatamap}
          mouseEnterOnSubunit={this.props.mouseEnterOnSubunit}
        />

        <LinearLegend
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          extremeValues={extremeValues}
          mapUi={mapUi}
        />
      </g>
    )
  }
}

MapWithLegend.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  mouseMoveOnDatamap: PropTypes.func.isRequired,
  mouseEnterOnDatamap: PropTypes.func.isRequired,
  mouseLeaveDatamap: PropTypes.func.isRequired,
  mouseEnterOnSubunit: PropTypes.func.isRequired,
  regionData: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}
