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
      <div>
        <div className="dropzone-container">
          <Link to="/editor/edit-data" className="empty-table-btn">go to empty data table</Link>

          <Dropzone className="dropzone" activeClassName="dropzone-active" onDrop={this.onDrop}>
            <div>Try dropping some file here, or click to select files to upload.</div>
          </Dropzone>
        </div>

        <div className="dropzone-info-container">
          <DropzoneInfo />
        </div>
      </div>
    )
  }
}
