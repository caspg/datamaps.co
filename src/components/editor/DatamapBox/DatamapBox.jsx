import React, { Component, PropTypes } from 'react'
import { Map } from 'immutable'

import style from './DatamapBox.css'
import MapElements from './MapElements/MapElements'
import HoverInfo from './HoverInfo/HoverInfo'

export default class DatamapBox extends Component {
  constructor(props) {
    super(props)
    this.mouseMoveOnDatamap = this.mouseMoveOnDatamap.bind(this)
    this.mouseEnterOnDatamap = this.mouseEnterOnDatamap.bind(this)
    this.mouseLeaveDatamap = this.mouseLeaveDatamap.bind(this)
    this.mouseEnterOnSubunit = this.mouseEnterOnSubunit.bind(this)

    this.state = {
      infoWindowPos: Map({ x: 0, y: 0 }),
      infoWindowActive: false,
      activeSubunitName: 'default',
    }
  }

  mouseMoveOnDatamap(e) {
    const position = Map({ x: e.clientX, y: e.clientY })
    this.setState({ infoWindowPos: position })
  }

  mouseEnterOnDatamap() {
    this.setState({ infoWindowActive: true })
  }

  mouseLeaveDatamap() {
    this.setState({ infoWindowActive: false })
  }

  mouseEnterOnSubunit(name, value) {
    this.setState({
      activeSubunitName: name,
      activeSubunitValue: value,
    })
  }

  render() {
    const { regionData, extremeValues } = this.props

    const {
      infoWindowPos,
      infoWindowActive,
      activeSubunitName,
      activeSubunitValue,
    } = this.state

    return (
      <div ref="DatamapBox" className={style.datamapbox}>
        <MapElements
          topoData={this.props.topoData}
          mapType={this.props.mapType}
          mapUi={this.props.mapUi}
          regionData={regionData}
          extremeValues={extremeValues}
          mouseMoveOnDatamap={this.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.mouseLeaveDatamap}
          mouseEnterOnSubunit={this.mouseEnterOnSubunit}
          infoWindowPos={infoWindowPos}
        />
        <HoverInfo
          active={infoWindowActive}
          position={infoWindowPos}
          name={activeSubunitName}
          value={activeSubunitValue}
        />
      </div>
    )
  }
}

DatamapBox.propTypes = {
  regionData: PropTypes.instanceOf(Map).isRequired,
  extremeValues: PropTypes.instanceOf(Map).isRequired,
  mapUi: PropTypes.instanceOf(Map).isRequired,
  mapType: PropTypes.string.isRequired,
  topoData: PropTypes.instanceOf(Map).isRequired,
}
