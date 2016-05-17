import React, { Component, PropTypes } from 'react'
import d3 from 'd3'
import { Map } from 'immutable'

import DatamapSubunit from './DatamapSubunit'

export default class Datamap extends Component {
  constructor(props) {
    super(props)
    this.handleMouseEnterOnSubunit = this.handleMouseEnterOnSubunit.bind(this)

    this.state = {
      topoJSONfeatures: this.props.topoData.get(this.props.mapType),
      path: this.path(this.props.svgWidth, this.props.svgHeight),
      svgResized: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { svgWidth, svgHeight } = nextProps
    const path = this.path(svgWidth, svgHeight)

    const svgResized = nextProps.svgWidth !== this.props.svgWidth ||
      nextProps.svgHeight !== this.props.svgHeight

    this.setState({ path, svgResized })
  }

  path(svgWidth, svgHeight) {
    const config = {
      usa: {
        projection: 'albersUsa',
        scale: 1,
      },
      world: {
        projection: 'equirectangular',
        scale: 2 * Math.PI,
      },
    }[this.props.mapType]

    const projection = d3.geo[config.projection]().scale(svgWidth / config.scale)
      .translate([svgWidth / 2, svgHeight / 2])

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
    const { colorScale, noDataColor } = this.props

    return this.state.topoJSONfeatures.map((feature, index) => {
      const subunitData = this.props.regionData.find((datum) => datum.get('code') === feature.id)
      const subunitValue = subunitData ? subunitData.get('value') : null
      const fillColor = subunitValue ? colorScale(subunitValue) : noDataColor

      return (
        <DatamapSubunit
          key={feature.id}
          index={index}
          path={() => this.state.path(feature)}
          name={feature.properties.name}
          value={subunitValue}
          svgResized={this.state.svgResized}
          fillColor={fillColor}
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
}
