import React, { Component, PropTypes } from 'react';

import Datamap from './Datamap';

export default class MapWithLegend extends Component {
  render() {
    const { svgWidth, svgHeight } = this.props

    return (
      <g>
        <Datamap
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          mouseMoveOnDatamap={this.props.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.props.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.props.mouseLeaveDatamap}
        />
      </g>
    );
  }
}

MapWithLegend.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  mouseMoveOnDatamap: PropTypes.func.isRequired,
  mouseEnterOnDatamap: PropTypes.func.isRequired,
  mouseLeaveDatamap: PropTypes.func.isRequired,
}
