import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import style from './EditDataView.css'
import DataTableContainer from '../../containers/DataTableContainer'

const EditDataView = (props) =>
 <div className={style.container}>
     <Link className={'button ' + style.link} to={`/editor/${props.params.mapType}/edit-map`}>
       edit map style
     </Link>
     <Link className={style.link} to={`/editor/${props.params.mapType}/upload`}>
       upload new data
     </Link>

     <DataTableContainer />
   </div>

EditDataView.propTypes = {
  params: PropTypes.shape({
    mapType: PropTypes.string.isRequired,
  }),
}

export default EditDataView
