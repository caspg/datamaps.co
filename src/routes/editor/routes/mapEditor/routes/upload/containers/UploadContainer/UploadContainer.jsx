import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import style from './UploadContainer.css'
import { uploadDataAndRedirect } from 'redux/actions/regionData'
import DropzoneBox from '../../components/DropzoneBox/DropzoneBox'
import DropzoneInfo from '../../components/DropzoneInfo/DropzoneInfo'

class UploadContainer extends Component {
  constructor(props) {
    super(props)
    this.handleDataUpload = this.handleDataUpload.bind(this)
  }

  handleDataUpload(data) {
    const { dispatch, mapType } = this.props
    dispatch(uploadDataAndRedirect(data, mapType))
  }

  render() {
    const { mapType } = this.props

    return (
      <div>
        <div className={style.container}>
          <Link to={`/editor/${mapType}/edit-data`} className={style['empty-table-btn']}>
            go to the data table
          </Link>

          <DropzoneBox onDataUpload={this.handleDataUpload} />
        </div>

        <DropzoneInfo mapType={mapType} />
      </div>
    )
  }
}

UploadContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapType: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType,
    regionData: state.regionData,
  }
}

export default connect(mapStateToProps)(UploadContainer)
