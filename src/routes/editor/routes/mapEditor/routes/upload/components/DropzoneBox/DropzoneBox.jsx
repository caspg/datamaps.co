import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import d3 from 'd3'
import { fromJS } from 'immutable'

import style from './DropzoneBox.css'

export default class DropzoneBox extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
    this.state = {
      errors: [],
    }
  }

  onDrop(files) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const parsedCSV = d3.csv.parse(e.target.result)
      const columns = Object.keys(parsedCSV[0])

      if (this.validateColumnNames(columns)) {
        const list = fromJS(parsedCSV)
        const filteredList = list.filter((item) => {
          const value = item.get('value')
          return !!value && !isNaN(parseFloat(value))
        })
        const parsedList = filteredList.map((item) =>
          item.update((_item) => _item.set('value', parseFloat(_item.get('value'))))
        )

        this.props.onDataUpload(parsedList)
      }
    }

    reader.readAsText(file)
  }

  validateColumnNames(columns) {
    const errors = []

    if (columns.indexOf('value') === -1) {
      errors.push('CSV file has to contain "value" column')
    }

    if (columns.indexOf('code') === -1 && columns.indexOf('name') === -1) {
      errors.push('CSV file has to contain "code" or "name" column')
    }

    if (errors.length > 0) {
      this.setState({ errors })
      return false
    }

    return true
  }

  renderErrors() {
    const errors = this.state.errors.map((error, index) => <li key={index}>{error}</li>)

    return errors.length > 0 ? (<ul className={style.errors}>{errors}</ul>) : ''
  }

  render() {
    return (
      <div>
        {this.renderErrors()}

        <Dropzone
          className={style.dropzone}
          activeClassName={style['dropzone-active']}
          onDrop={this.onDrop}
        >
          <div>
            Try dropping some file here, or click to select files to upload.
          </div>
        </Dropzone>
      </div>
    )
  }
}

DropzoneBox.propTypes = {
  onDataUpload: PropTypes.func.isRequired,
}
