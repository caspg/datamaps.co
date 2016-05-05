import React from 'react'
import { Link } from 'react-router'

import style from './InitView.css'

const InitView = () =>
  <div className="row center-xs">
    <div className="col-xs-12">
      <div className={style.container}>
        <Link to="/editor/upload" className={'button ' + style.button}>
          Upload CSV data file
        </Link>
        <Link to="/editor/edit-data" className={'button ' + style.button}>
          Start with empty data table
        </Link>
      </div>
    </div>
  </div>

export default InitView
