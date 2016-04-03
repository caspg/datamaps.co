import React, { Component } from 'react'

import MapElements from './MapElements'
import HoverInfo from './HoverInfo'

export default class DatamapBox extends Component {
  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)
    this.mouseMoveOnDatamap = this.mouseMoveOnDatamap.bind(this)
    this.mouseEnterOnDatamap = this.mouseEnterOnDatamap.bind(this)
    this.mouseLeaveDatamap = this.mouseLeaveDatamap.bind(this)
    this.mouseEnterOnSubunit = this.mouseEnterOnSubunit.bind(this)

    this.state = {
      containerWidth: null,
      minWidth: 500,
      maxWidth: 750,
      infoWindowPos: { x: 0, y: 0 },
      infoWindowActive: false,
      activeSubunitName: 'default',
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillReceiveProps() {
    const containerWidth = this.currentContainerWidth()
    this.setState({ containerWidth })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    const containerWidth = this.currentContainerWidth()
    if (containerWidth !== this.state.containerWidth) {
      this.setState({ containerWidth })
    }
  }

  currentContainerWidth() {
    const { minWidth, maxWidth } = this.state
    const clientWidth = this.refs.DatamapBox.clientWidth
    return Math.min(Math.max(clientWidth, minWidth), maxWidth)
  }

  mouseMoveOnDatamap(e) {
    const position = { x: e.clientX, y: e.clientY }
    this.setState({ infoWindowPos: position })
  }

  mouseEnterOnDatamap() {
    this.setState({ infoWindowActive: true })
  }

  mouseLeaveDatamap() {
    this.setState({ infoWindowActive: false })
  }

  mouseEnterOnSubunit(name) {
    this.setState({ activeSubunitName: name })
  }

  render() {
    const {
      containerWidth,
      infoWindowPos,
      infoWindowActive,
      activeSubunitName } = this.state

    const svgWidth = containerWidth || 0
    const datamapBoxStyle = {
      height: '100%',
      position: 'relative',
    }

    return (
      <div ref="DatamapBox" style={datamapBoxStyle}>
        <MapElements
          svgWidth={svgWidth}
          svgHeight={svgWidth * 0.8}
          mouseMoveOnDatamap={this.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.mouseLeaveDatamap}
          mouseEnterOnSubunit={this.mouseEnterOnSubunit}
        />
        <HoverInfo
          active={infoWindowActive}
          position={infoWindowPos}
          name={activeSubunitName}
          value={99}
        />
      </div>
    )
  }
}
