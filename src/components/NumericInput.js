import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NumericInput extends Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)

    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleOnChange(event) {
    const newValue = event.target.value
    if (/^[+-]?\d*(\.\d*)?$/.test(newValue)) {
      this.setState({ value: newValue || '' })
    } else {
      this.setState({ value: this.state.value || '' })
    }
  }

  handleOnBlur() {
    if (this.props.value !== this.state.value) {
      const { value } = this.state
      const parsedValue = value ? parseFloat(value) : ''
      this.props.onBlur(parsedValue)
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
        placeholder={this.props.placeholder}
      />
    )
  }
}

NumericInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func.isRequired,
  className: PropTypes.oneOf([
    'NumericInput__input',
    'NumericInput__table-input',
  ]),
}

NumericInput.defaultProps = {
  className: 'NumericInput__input',
}
