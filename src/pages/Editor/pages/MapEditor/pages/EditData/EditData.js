import React, { PropTypes } from 'react'

import { Link } from '@routes'
// import style from './EditDataView.css'
// import DataTableContainer from '../../containers/DataTableContainer'

const style = {};

const EditDataView = (props) =>
  <div className={style.container}>
    <h1>EditDataView</h1>

     <Link prefetch route={`/editor/${props.mapType}/edit-map`}>
      <a className={'button ' + style.link}>
        edit map style
      </a>
     </Link>
     <Link prefetch route={`/editor/${props.mapType}/upload`}>
        <a className={style.link}>
          upload new data
        </a>
     </Link>

     {/* <DataTableContainer /> */}
   </div>

EditDataView.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default EditDataView
