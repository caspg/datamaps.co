import React, { Component } from 'react'
import { connect } from 'react-redux'

import DropzoneBox from '../../components/DropzoneBox'

class UploadPage extends Component {
  constructor(props) {
    super(props)
    this.handleDataUpload = this.handleDataUpload.bind(this)
  }

  handleDataUpload(data) {
    console.log(data)
  }

  render() {
    return (
      <DropzoneBox
        onDataUpload={this.handleDataUpload}
      />
    )
  }
}

export default connect()(UploadPage)
