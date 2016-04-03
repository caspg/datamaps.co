import React, { Component, PropTypes } from 'react'
import topojson from 'topojson'
import d3 from 'd3'

import { usaTopoJSON } from '../../../../data/topoJSON'
import DatamapSubunit from './DatamapSubunit'

export default class Datamap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      geoJSONfeatures: topojson.feature(usaTopoJSON, usaTopoJSON.objects.usa).features,
      path: this.path(this.props.svgWidth, this.props.svgHeight),
    }
  }

  componentWillReceiveProps(nextProps) {
    const { svgWidth, svgHeight } = nextProps
    const path = this.path(svgWidth, svgHeight)
    this.setState({ path })
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.svgWidth !== this.props.svgWidth ||
      nextProps.svgHeight !== this.props.svgHeight
  }

  path(svgWidth, svgHeight) {
    const projection = d3.geo.albersUsa().scale(svgWidth)
      .translate([svgWidth / 2, svgHeight / 2])

    return d3.geo.path().projection(projection)
  }

  renderDatamapSubunits() {
    return this.state.geoJSONfeatures.map((feature) => {
      return (
        <DatamapSubunit
          key={feature.id}
          path={() => this.state.path(feature)}
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
}
