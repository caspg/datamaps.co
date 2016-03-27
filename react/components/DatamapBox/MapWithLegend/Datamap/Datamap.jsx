import React, { Component, PropTypes } from 'react'
import topojson from 'topojson'
import d3 from 'd3'

import { usaTopoJSON } from '../../../../topoData'
import DatamapSubunit from './DatamapSubunit'

export default class Datamap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      geoJSONfeatures: topojson.feature(usaTopoJSON, usaTopoJSON.objects.usa).features,
    }
  }

  get path() {
    const { svgWidth, svgHeight } = this.props
    const projection = d3.geo.albersUsa().scale(svgWidth)
      .translate([svgWidth / 2, svgHeight / 2])

    return d3.geo.path().projection(projection)
  }

  renderDatamapSubunits() {
    return this.state.geoJSONfeatures.map((feature) => {
      return (
        <DatamapSubunit
          key={feature.id}
          path={() => this.path(feature)}
        />
      )
    })
  }

  render() {
    return (
      <g>
        {this.renderDatamapSubunits()}
      </g>
    )
  }
}

Datamap.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
}
