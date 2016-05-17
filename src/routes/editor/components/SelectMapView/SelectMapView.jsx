import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import style from './SelectMapView.css'

const SelectMapView = () =>
  <div>
    <h1>SelectMapView</h1>

    <Link className="button" to="/editor/usa" >USA</Link>
    <Link className="button" to="/editor/world" >WORLD</Link>
  </div>

SelectMapView.propTypes = {
}

export default SelectMapView
