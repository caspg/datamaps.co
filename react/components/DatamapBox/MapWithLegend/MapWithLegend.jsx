import React, { Component } from 'react';

import Datamap from './Datamap';

export default class MapWithLegend extends Component {
  render() {
    return (
      <g>
        <Datamap />
      </g>
    );
  }
}
