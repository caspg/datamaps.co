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

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.svgResized !== this.props.svgResized ||
      nextState.active !== this.state.active ||
      nextProps.fillColor !== this.props.fillColor ||
      nextProps.borderColor !== this.props.borderColor
  }

  handleMouseEnter() {
    this.setState({ active: true })

    const { name, value, index } = this.props
    this.props.mouseEnterOnSubunit(name, value, index)
  }

  handleMouseLeave() {
    this.setState({ active: false })
  }

  render() {
    const subutniStyle = {
      fill: this.state.active ? '#FFCCBC' : this.props.fillColor,
      stroke: this.state.active ? '#FF5722' : this.props.borderColor,
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
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  svgResized: PropTypes.bool.isRequired,
  fillColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
