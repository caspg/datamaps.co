import React, { Component, PropTypes } from 'react'
import { List, Map } from 'immutable'
import d3 from 'd3'

import Datamap from './Datamap'

export default class MapWithLegend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      extremeValues: this.extremeValues(props),
      colorScale: this.colorScale(props),
    }
  }

  componentWillReceiveProps(nexProps) {
    this.setState({
      colorScale: this.colorScale(nexProps),
    })
  }

  extremeValues(props) {
    const { regionData } = props
    const values = regionData.map((item) => item.get('value'))
    const filteredValues = values.filterNot((item) => item === null)

    return List([filteredValues.min(), filteredValues.max()])
  }

  linearScale(props) {
    const extremeValues = this.extremeValues(props)
    const { mapUi } = props
    const startColor = mapUi.get('linear').get('startColor')
    const endColor = mapUi.get('linear').get('endColor')

    return d3.scale.linear()
      .domain([extremeValues.get(0), extremeValues.get(1)])
      .range([startColor, endColor])
      .interpolate(d3.interpolateLab)
  }

  colorScale(props) {
    const scales = {
      linear: this.linearScale(props),
    }

    const dataClassification = props.mapUi.get('dataClassification')
    return scales[dataClassification]
  }

  render() {
    const { svgWidth, svgHeight } = this.props

    return (
      <g>
        <Datamap
          regionData={this.props.regionData}
          svgWidth={svgWidth}
          svgHeight={svgHeight}
          colorScale={this.state.colorScale}
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
  regionData: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
}
