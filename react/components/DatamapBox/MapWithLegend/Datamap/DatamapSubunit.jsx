import React, { Component, PropTypes } from 'react'

export default class DatamapSubunit extends Component {
  constructor(props) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    this.state = {
      active: false,
    }
  }

  handleMouseEnter() {
    this.setState({ active: true })

    const { name, value } = this.props
    this.props.mouseEnterOnSubunit(name, value)
  }

  handleMouseLeave() {
    this.setState({ active: false })
  }

  render() {
    const subutniStyle = {
      fill: this.state.active ? '#FFCCBC' : '#f5f5f5',
      stroke: this.state.active ? '#FF5722' : '#ccc',
      strokeWidth: this.state.active ? 2 : 0.5,
    }

    return (
      <path
        className="datamap-subunit"
        style={subutniStyle}
        d={this.props.path()}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

DatamapSubunit.propTypes = {
  path: PropTypes.func.isRequired,
  mouseEnterOnSubunit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
}
