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

      <div className={'row ' + style.actionbar}>
        <div className="col-xs-12 col-sm-6">
          <div className="row middle-xs start-xs">
            <MapSelect
              mapType={props.mapType}
              onMapTypeChange={props.onMapTypeChange}
              currentPath={props.currentPath}
            />
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
