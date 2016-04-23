import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'
import d3 from 'd3'

import Title from './Title'
import Datamap from './Datamap'
import MapLegend from './MapLegend'

export default class MmapElements extends Component {
  linearScale() {
    const { mapUi, extremeValues } = this.props
    const startColor = mapUi.get('linear').get('startColor')
    const endColor = mapUi.get('linear').get('endColor')

    return d3.scale.linear()
      .domain([extremeValues.get('min'), extremeValues.get('max')])
      .range([startColor, endColor])
      .interpolate(d3.interpolateLab)
  }

  equidistantScale() {
    const { mapUi, extremeValues } = this.props
    const colorPallete = mapUi.getIn(['equidistant', 'pallete'])

    return d3.scale.quantize()
      .domain([extremeValues.get('min'), extremeValues.get('max')])
      .range(colorPallete)
  }

  colorScale() {
    const scales = {
      linear: this.linearScale(),
      equidistant: this.equidistantScale(),
    }

    const dataClassification = this.props.mapUi.get('dataClassification')
    return scales[dataClassification]
  }

  renderMapElements(svgWidth, svgHeight) {
    const svgStyle = {
      width: svgWidth,
      height: svgHeight,
      margin: 'auto',
      position: 'absolute',
      top: '15px',
      left: 0,
      right: 0,
    }

    const titleStyle = {
      textAnchor: 'start',
      fontSize: 25,
      fill: '#424242',
      fontWeight: '300',
    }

    const { mapUi, extremeValues } = this.props
    const noDataColor = mapUi.get('noDataColor')
    const colorScale = this.colorScale()

    return (
      <svg style={svgStyle}>
        <Title text={this.props.mapUi.get('title')} style={titleStyle} coords={{ x: 30, y: 40 }} />

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
      </svg>
    )
  }

  render() {
    const { svgWidth, svgHeight } = this.props

    return (
      <div>
        {svgWidth && svgHeight && this.renderMapElements(svgWidth, svgHeight)}
      </div>
    )
  }
}

MmapElements.propTypes = {
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
