import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Link } from 'react-router'

import DropzoneInfo from './DropzoneInfo'

export default class DropzoneBox extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop() {
  }

  render() {
    return (
      <div className="dropzone-container">
        <Link to="/editor" className="button empty-table-btn">go to empty data table</Link>

        <Dropzone className="dropzone" activeClassName="dropzone-active" onDrop={this.onDrop}>
          <div>Try dropping some file here, or click to select files to upload.</div>
        </Dropzone>

        <DropzoneInfo />
      </div>
    )
  }
}
