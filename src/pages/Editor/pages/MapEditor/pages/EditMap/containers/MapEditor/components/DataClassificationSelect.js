import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

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

  handleOnChange(option) {
    this.props.onClassificationChange(option.value)
  }

  render() {
    return (
      <div className="DataClassificationSelect">
        <Select
          value={this.props.dataClassification}
          options={this.options()}
          onChange={this.handleOnChange}
          clearable={false}
          className="data-classification"
        />

        <style jsx>{`
          .DataClassificationSelect {
            margin-bottom: 15px;
          }
        `}</style>
      </div>
    )
  }
}

DataClassificationSelect.propTypes = {
  dataClassification: PropTypes.string.isRequired,
  onClassificationChange: PropTypes.func.isRequired,
}
