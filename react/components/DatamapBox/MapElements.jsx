import React, { Component, PropTypes } from 'react';

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
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          mouseMoveOnDatamap={this.props.mouseMoveOnDatamap}
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
    );
  }
}

DatamapElements.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  mouseMoveOnDatamap: PropTypes.func.isRequired,
}
