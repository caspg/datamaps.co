import React, { Component } from 'react'
import topojson from 'topojson'
import d3 from 'd3'

import { usaTopoJSON } from '../../../../topoData'
import DatamapSubunit from './DatamapSubunit'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      geoJSONfeatures: topojson.feature(usaTopoJSON, usaTopoJSON.objects.usa).features,
    }
  }

  get path() {
    const containerWidth = 800
    const containerHeight = 500
    const projection = d3.geo.albersUsa().scale(containerWidth)
      .translate([containerWidth / 2, containerHeight / 2])

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
