import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { uploadDataAndRedirect } from 'redux/actions/regionData'
import DropzoneBox from '../components/DropzoneBox/DropzoneBox'

class DropzoneContainer extends Component {
  constructor(props) {
    super(props)
    this.handleDataUpload = this.handleDataUpload.bind(this)
  }

  handleDataUpload(data) {
    this.props.dispatch(uploadDataAndRedirect(data))
  }

  render() {
    return (
      <DropzoneBox
        onDataUpload={this.handleDataUpload}
      />
    )
  }
}

DropzoneContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(DropzoneContainer)
