import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

export default class DataClassesSelect extends Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(option) {
    this.props.onClassesCountChange(option.value);
  }

  get options() {
    return [
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
    ]
  }

  render() {
    return (
      <div className="DataClassesSelect">
        <p className="DataClassesSelect__paragraph">Number of data classes:</p>
        <Select
          name="form-field-name"
          value={this.props.classesCount}
          options={this.options}
          onChange={this.handleOnChange}
          clearable={false}
        />

        <style jsx>{`
          .DataClassesSelect {
            min-height: 36px;
          }

          .DataClassesSelect__paragraph {
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    )
  }
}

DataClassesSelect.propTypes = {
  classesCount: PropTypes.number.isRequired,
  onClassesCountChange: PropTypes.func.isRequired,
}
