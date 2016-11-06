import React, { PropTypes } from 'react'

import style from './Header.css'
import Navbar from 'components/Navbar/Navbar'
import SaveButtons from '../SaveButtons/SaveButtons'
import MapSelect from '../MapSelect/MapSelect'

import MapAutosuggest from '../MapAutosuggest'

import routes from 'config/routes'

// <MapSelect
//   mapType={props.mapType}
//   onMapTypeChange={props.onMapTypeChange}
//   currentPath={props.currentPath}
// />

const Header = (props) => {
  const isEditorPath = props.currentPath === routes.editor

  return (
    <div className={style.container}>
      <div className={style['navbar-wrapper']}>
        <Navbar />
      </div>

      <div className={`row ${style.actionbar}`}>
        <div className="col-xs-12 col-sm-6">
          <div className="row middle-xs start-xs">
            <MapAutosuggest />

          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="row middle-xs start-xs end-sm">
            {!isEditorPath && <SaveButtons mapType={props.mapType} />}
          </div>
        </div>
      </div>

    </div>
  )
}

Header.propTypes = {
  mapType: PropTypes.string.isRequired,
  onMapTypeChange: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
}

export default Header
