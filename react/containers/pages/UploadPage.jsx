import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { uploadData } from '../../actions/regionData'
import DropzoneBox from '../../components/DropzoneBox'

class UploadPage extends Component {
  constructor(props) {
    super(props)
    this.handleDataUpload = this.handleDataUpload.bind(this)
  }

  handleDataUpload(data) {
    this.props.dispatch(uploadData(data))
  }

  render() {
    return (
      <DropzoneBox
        onDataUpload={this.handleDataUpload}
      />
    )
  }
}

UploadPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(UploadPage)
