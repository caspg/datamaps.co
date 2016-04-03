import React, { Component, PropTypes } from 'react'

export default class NumericInput extends Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)

    this.state = {
      value: this.props.value || null,
    }
  }

  handleOnChange(event) {
    const newValue = parseFloat(event.target.value)

    if (/^[+-]?\d*(\.\d*)?$/.test(newValue)) {
      this.setState({ value: newValue })
    } else {
      this.setState({ value: parseFloat(this.state.value) || '' })
    }
  }

  handleOnBlur() {
    if (this.props.value !== this.state.value) {
      this.props.onBlur(this.state.value)
    }
  }

  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        value={this.state.value}
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
      />
    )
  }
}

NumericInput.propTypes = {
  value: PropTypes.number,
  className: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
}
