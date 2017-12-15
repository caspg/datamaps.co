import React, { Component, PropTypes } from 'react'
import Dropzone from 'react-dropzone'

import { grey600, grey100 } from '@src/styles/colors'
import parseDsv from '@src/utils/parseDsv'

import DataUploadModal from '../DataUploadModal'

class DropzoneBox extends Component {
  static propTypes = {
    mapType: PropTypes.string.isRequired,
  }

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
          className="Dropzone"
          activeClassName="Dropzone-active"
          onDrop={this.onDrop}
        >
          <div>
            Try dropping some file here, or click to select files to upload.
          </div>
        </Dropzone>

        {dataUploadModal}

        <style jsx global>{`
          .Dropzone {
            margin: 30px 0;
            padding: 25px;
            height: 150px;
            border-width: 1px;
            border-color: ${grey600};
            border-style: dashed;
            border-radius: 5px;
            background-color: ${grey100};
          }

          .Dropzone-active {
            border-style: solid;
          }

          @media(min-width: 950px) {
            .Dropzone {
              width: 250px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default DropzoneBox
