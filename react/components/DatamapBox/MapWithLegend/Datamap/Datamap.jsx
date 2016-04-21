import React, { Component, PropTypes } from 'react'
import topojson from 'topojson'
import d3 from 'd3'
import { Map } from 'immutable'

import { usaTopoJSON } from '../../../../data/topoJSON'
import DatamapSubunit from './DatamapSubunit'

export default class Datamap extends Component {
  constructor(props) {
    super(props)
    this.handleMouseEnterOnSubunit = this.handleMouseEnterOnSubunit.bind(this)

    this.state = {
      geoJSONfeatures: topojson.feature(usaTopoJSON, usaTopoJSON.objects.usa).features,
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
    const projection = d3.geo.albersUsa().scale(svgWidth)
      .translate([svgWidth / 2, svgHeight / 2])

    return d3.geo.path().projection(projection)
  }

  handleMouseEnterOnSubunit(name, value, index) {
    const data = this.state.geoJSONfeatures
    const newData = [
      ...data.slice(0, index),
      ...data.slice(index + 1),
      data[index],
    ]

    this.setState({ geoJSONfeatures: newData })
    this.props.mouseEnterOnSubunit(name, value)
  }

  renderDatamapSubunits() {
    const { colorScale, noDataColor } = this.props

    return this.state.geoJSONfeatures.map((feature, index) => {
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
