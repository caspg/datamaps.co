import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'

import Datamap from './Datamap'

export default class MapWithLegend extends Component {
  render() {
    const { svgWidth, svgHeight } = this.props

    return (
      <g>
        <Datamap
          regionData={this.props.regionData}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          mouseMoveOnDatamap={this.props.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.props.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.props.mouseLeaveDatamap}
          mouseEnterOnSubunit={this.props.mouseEnterOnSubunit}
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
  regionData: PropTypes.instanceOf(List).isRequired,
}
