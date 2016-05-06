import React from 'react'
import { Link } from 'react-router'

import DataTableContainer from '../../containers/DataTableContainer'

const EditDataView = () =>
  <div className="datatable-container">
    <Link className="button" to="/editor/edit-map">edit map style</Link>
    <Link to="/editor/upload">upload new data</Link>

    <DataTableContainer />
  </div>

export default EditDataView
