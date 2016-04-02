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
    const newValue = event.target.value;
    if (newValue === this.state.value) return;
    if (!/^[+-]?\d*(\.\d*)?$/.test(newValue)) return;
    this.setState({ value: newValue });
  }

  handleOnBlur(event) {
    const newValue = parseFloat(event.target.value) || null;
    if (this.props.value === newValue) return;
    this.setState({ value: newValue });
    this.props.onBlur(newValue);
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
