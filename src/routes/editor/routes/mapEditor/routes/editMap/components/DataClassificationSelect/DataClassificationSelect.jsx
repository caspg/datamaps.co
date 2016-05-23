import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import style from './DataClassificationSelect.css'

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
      <div className={style.container}>
        <Select
          value={this.props.dataClassification}
          options={this.options()}
          onChange={this.handleOnChange}
          clearable={false}
          className="data-classification"
        />
      </div>
    )
  }
}

DataClassificationSelect.propTypes = {
  dataClassification: PropTypes.string.isRequired,
  onClassificationChange: PropTypes.func.isRequired,
}
