import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'

import MapWithLegend from './MapWithLegend'
import Title from './Title'

export default class MmapElements extends Component {
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

    return (
      <svg style={svgStyle}>
        <Title text={this.props.mapUi.get('title')} style={titleStyle} coords={{ x: 30, y: 40 }} />

        <MapWithLegend
          mapUi={this.props.mapUi}
          regionData={this.props.regionData}
          extremeValues={this.props.extremeValues}
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
