import React, { PropTypes } from 'react'

import style from './Header.css'
import Navbar from 'components/Navbar/Navbar'
import SaveButtons from '../SaveButtons/SaveButtons'
import MapSelect from '../MapSelect/MapSelect'

import routes from 'config/routes'

const Header = (props) => {
  const isEditorPath = props.currentPath === routes.editor

  return (
    <div>
      <div className={style['navbar-wrapper']}>
        <Navbar textColor="grey" />
      </div>

      <div className={'row middle-xs end-xs ' + style.actionbar}>
        <MapSelect mapType={props.mapType} onMapTypeChange={props.onMapTypeChange} />

        {!isEditorPath && <SaveButtons />}
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
