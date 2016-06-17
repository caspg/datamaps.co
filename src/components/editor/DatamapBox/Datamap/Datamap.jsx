import React, { Component, PropTypes } from 'react'
import d3 from 'd3'
import { Map } from 'immutable'

import config from 'config/maps'
import DatamapSubunit from './DatamapSubunit'

export default class Datamap extends Component {
  constructor(props) {
    super(props)
    this.handleMouseEnterOnSubunit = this.handleMouseEnterOnSubunit.bind(this)

    this.state = {
      topoJSONfeatures: this.props.topoData.get(this.props.mapType),
      path: this.path(this.props.svgWidth, this.props.svgHeight, this.props.mapType),
      svgResized: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { svgWidth, svgHeight, mapType, topoData } = nextProps
    const path = this.path(svgWidth, svgHeight, mapType)

    // const svgResized = nextProps.svgWidth !== this.props.svgWidth ||
    //   nextProps.svgHeight !== this.props.svgHeight

    const topoJSONfeatures = topoData.get(mapType)

    if (mapType !== this.props.mapType) {
      this.setState({ path, topoJSONfeatures })
    }
  }

  path(svgWidth, svgHeight, mapType) {
    const mapConfig = config.configs[mapType].mapUi
    const projection = mapConfig.projection(svgWidth, svgHeight)

    return d3.geo.path().projection(projection)
  }

  handleMouseEnterOnSubunit(name, value, index) {
    const data = this.state.topoJSONfeatures
    const newData = [
      ...data.slice(0, index),
      ...data.slice(index + 1),
      data[index],
    ]

    this.setState({ topoJSONfeatures: newData })
    this.props.mouseEnterOnSubunit(name, value)
  }

  renderDatamapSubunits() {
    const { colorScale, noDataColor, borderColor, mapType } = this.props

    return this.state.topoJSONfeatures.map((feature, index) => {
      const subunitData = this.props.regionData.find((datum) => datum.get('code') === feature.id)
      const subunitValue = subunitData ? subunitData.get('value') : ''
      const fillColor = subunitValue === '' ? noDataColor : colorScale(subunitValue)

      return (
        <DatamapSubunit
          key={`${mapType}-${feature.id}`}
          index={index}
          path={() => this.state.path(feature)}
          name={feature.properties.name}
          value={subunitValue}
          svgResized={this.state.svgResized}
          fillColor={fillColor}
          borderColor={borderColor}
          mouseEnterOnSubunit={this.handleMouseEnterOnSubunit}
        />
      )
    })
  }

  render() {
    return (
      <g
        onMouseMove={this.props.mouseMoveOnDatamap}
        onMouseEnter={this.props.mouseEnterOnDatamap}
        onMouseLeave={this.props.mouseLeaveDatamap}
      >
        {this.renderDatamapSubunits()}
      </g>
    )
  }
}

Datamap.propTypes = {
  topoData: PropTypes.instanceOf(Map).isRequired,
  mapType: PropTypes.string.isRequired,
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  mouseMoveOnDatamap: PropTypes.func.isRequired,
  mouseEnterOnDatamap: PropTypes.func.isRequired,
  mouseLeaveDatamap: PropTypes.func.isRequired,
  mouseEnterOnSubunit: PropTypes.func.isRequired,
  regionData: PropTypes.instanceOf(Map).isRequired,
  colorScale: PropTypes.func.isRequired,
  noDataColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
}
