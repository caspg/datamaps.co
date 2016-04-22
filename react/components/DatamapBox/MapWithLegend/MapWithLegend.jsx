import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'
import d3 from 'd3'

import Datamap from './Datamap'
import MapLegend from './MapLegend/MapLegend'

export default class MapWithLegend extends Component {
  linearScale() {
    const { mapUi, extremeValues } = this.props
    const startColor = mapUi.get('linear').get('startColor')
    const endColor = mapUi.get('linear').get('endColor')

    return d3.scale.linear()
      .domain([extremeValues.get('min'), extremeValues.get('max')])
      .range([startColor, endColor])
      .interpolate(d3.interpolateLab)
  }

  colorScale() {
    const scales = {
      linear: this.linearScale(),
    }

    const dataClassification = this.props.mapUi.get('dataClassification')
    return scales[dataClassification]
  }

  render() {
    const colorScale = this.colorScale()

    const { svgWidth, svgHeight, mapUi, extremeValues } = this.props
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

        <MapLegend
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
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}
