import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import style from './InitView.css'

const InitView = (props) =>
  <div className={style.container}>
    <div className="row center-xs">
      <div className="col-xs-12">
        <div className={style.wrapper}>
          <Link to={`/editor/${props.params.mapType}/upload`} className={'button ' + style.button}>
            Upload CSV data file
          </Link>
          <Link to={`/editor/${props.params.mapType}/edit-data`} className={'button ' + style.button}>
            go to data table
          </Link>
        </div>
      </div>
    </div>
  </div>

InitView.propTypes = {
  params: PropTypes.shape({
    mapType: PropTypes.string.isRequired,
  }),
}

export default InitView
