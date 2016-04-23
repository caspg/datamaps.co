import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.min.css'

export default class DataClassificationSelect extends Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  options() {
    return [
      { value: 'linear', label: 'Linear Scale' },
      { value: 'equidistant', label: 'Equidistant Scale' },
    ]
  }

  handleOnChange(value) {
    this.props.onClassificationChange(value)
  }

  render() {
    return (
      <div>
        <Select
          name="form-field-name"
          value={this.props.dataClassification}
          options={this.options()}
          onChange={this.handleOnChange}
          clearable={false}
        />
      </div>
    )
  }
}

DataClassificationSelect.propTypes = {
  dataClassification: PropTypes.string.isRequired,
  onClassificationChange: PropTypes.func.isRequired,
}
