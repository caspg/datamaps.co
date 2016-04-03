import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'

import MapWithLegend from './MapWithLegend'

export default class DatamapElements extends Component {
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

    return (
      <svg style={svgStyle}>
        <MapWithLegend
          regionData={this.props.regionData}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          mouseMoveOnDatamap={this.props.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.props.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.props.mouseLeaveDatamap}
          mouseEnterOnSubunit={this.props.mouseEnterOnSubunit}
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

DatamapElements.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  mouseMoveOnDatamap: PropTypes.func.isRequired,
  mouseEnterOnDatamap: PropTypes.func.isRequired,
  mouseLeaveDatamap: PropTypes.func.isRequired,
  mouseEnterOnSubunit: PropTypes.func.isRequired,
  regionData: PropTypes.instanceOf(List).isRequired,
}
