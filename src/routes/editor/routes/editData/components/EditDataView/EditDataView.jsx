import React from 'react'
import { Link } from 'react-router'

import style from './EditDataView.css'
import DataTableContainer from '../../containers/DataTableContainer'

const EditDataView = () =>
  <div className={style.container}>
    <Link className={'button ' + style.link} to="/editor/edit-map">
      edit map style
    </Link>
    <Link className={style.link} to="/editor/upload">
      upload new data
    </Link>

    <DataTableContainer />
  </div>

export default EditDataView
