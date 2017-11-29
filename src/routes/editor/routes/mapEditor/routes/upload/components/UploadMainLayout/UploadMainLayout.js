import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import style from './UploadMainLayout.css'
import DropzoneBox from '../../components/DropzoneBox/DropzoneBox'
import DropzoneInfo from '../../components/DropzoneInfo/DropzoneInfo'

const UploadMainLayout = (props) => {
  const mapTypes = props.params.mapType

  return (
    <div>
      <div className={style.container}>
        <Link to={`/editor/${mapTypes}/edit-data`} className={style['empty-table-btn']}>
          go to the data table
        </Link>

        <DropzoneBox mapType={mapTypes} />
      </div>

      <DropzoneInfo mapType={mapTypes} />
    </div>
  )
}

UploadMainLayout.propTypes = {
  params: PropTypes.shape({
    mapType: PropTypes.string.isRequired,
  }),
}

export default UploadMainLayout
