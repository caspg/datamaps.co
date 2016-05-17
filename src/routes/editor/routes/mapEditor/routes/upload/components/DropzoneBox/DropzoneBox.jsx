import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'
import d3 from 'd3'
import { fromJS } from 'immutable'

import style from './DropzoneBox.css'

export default class DropzoneBox extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(files) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const parsedCSV = d3.csv.parse(e.target.result)
      const list = fromJS(parsedCSV)
      const filteredList = list.filter((item) => item.get('value'))
      const parsedList = filteredList.map((item) =>
        item.update((_item) => _item.set('value', parseFloat(_item.get('value'))))
      )

      this.props.onDataUpload(parsedList)
    }

    reader.readAsText(file)
  }

  render() {
    return (
      <Dropzone
        className={style.dropzone}
        activeClassName={style['dropzone-active']}
        onDrop={this.onDrop}
      >
        <div>
          Try dropping some file here, or click to select files to upload.
        </div>
      </Dropzone>
    )
  }
}

DropzoneBox.propTypes = {
  onDataUpload: PropTypes.func.isRequired,
}
