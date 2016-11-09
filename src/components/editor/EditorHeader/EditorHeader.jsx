import React, { PropTypes } from 'react'

import style from './EditorHeader.css'
import Navbar from 'components/Navbar/Navbar'
import SaveButtons from '../SaveButtons/SaveButtons'
import MapAutosuggest from '../MapAutosuggest'
import HamburgerMenu from '../../HamburgerMenu'
import MailChimpPopup from '../../MailChimpPopup'

import routes from 'config/routes'

const EditorHeader = (props) => {
  const isEditorPath = props.currentPath === routes.editor

  return (
    <div className={style.container}>
      <div className={style['navbar-wrapper']}>
        <Navbar>
          <HamburgerMenu>
            {
              isEditorPath ? null :
                <SaveButtons
                  mapType={props.mapType}
                  className="hamburger-btn"
                />
            }
          </HamburgerMenu>
        </Navbar>
      </div>

      <div className={`row ${style.actionbar}`}>
        <div className="col-xs-6">
          <div className="row middle-xs start-xs">
            <MapAutosuggest
              mapType={props.mapType}
              onMapTypeChange={props.onMapTypeChange}
              currentPath={props.currentPath}
            />

          </div>
        </div>
        <div className="col-xs-6">
          <div className="row middle-xs end-xs">

            <MailChimpPopup />

            <div className="hide-xs">
              {!isEditorPath && <SaveButtons mapType={props.mapType} />}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

EditorHeader.propTypes = {
  mapType: PropTypes.string.isRequired,
  onMapTypeChange: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
}

export default EditorHeader
