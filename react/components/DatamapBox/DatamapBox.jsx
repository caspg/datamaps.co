import React, { Component } from 'react'

import MapWithLegend from './MapWithLegend'

export default class DatamapBox extends Component {
  render() {
    return (
      <div>
        <svg>
          <MapWithLegend />
        </svg>
      </div>
    )
  }
}
