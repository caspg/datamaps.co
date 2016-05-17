import React from 'react'
import { Link } from 'react-router'

import style from './UploadView.css'
import DropzoneContainer from '../../containers/DropzoneContainer'
import DropzoneInfo from '../DropzoneInfo/DropzoneInfo'

const UploadView = () =>
  <div>
    <div className={style.container}>
      <Link to="/editor/edit-data" className={style['empty-table-btn']}>
        go to the data table
      </Link>

      <DropzoneContainer />
    </div>

    <DropzoneInfo />
  </div>

export default UploadView
