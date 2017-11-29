import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'

import parseDsv from 'utils/parseDsv'
import style from './DropzoneBox.css'
import DataUploadModal from '../DataUploadModal'

export default class DropzoneBox extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
    this.state = {
      modalIsOpen: false,
      parsedDsv: [],
    }

    this.handleModalClose = this.handleModalClose.bind(this)
  }

  onDrop(files) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      const parsedDsv = parseDsv(e.target.result)

      this.setState({
        modalIsOpen: true,
        parsedDsv,
      })
    }

    reader.readAsText(file)
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
      parsedDsv: [],
    })
  }

  render() {
    const dataUploadModal = (
      <DataUploadModal
        data={this.state.parsedDsv}
        onClose={this.handleModalClose}
        modalIsOpen={this.state.modalIsOpen}
        mapType={this.props.mapType}
      />
    )

    return (
      <div>
        <Dropzone
          className={style.dropzone}
          activeClassName={style['dropzone-active']}
          onDrop={this.onDrop}
        >
          <div>
            Try dropping some file here, or click to select files to upload.
          </div>
        </Dropzone>

        {dataUploadModal}
      </div>
    )
  }
}

DropzoneBox.propTypes = {
  mapType: PropTypes.string.isRequired,
}
