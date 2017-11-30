import React, { PropTypes } from 'react'

import { editorHeaderZIndex } from '@src/styles/variables'
import { grey100, grey300 } from '@src/styles/colors'

import Navbar from '@src/components/Navbar'
import HamburgerMenu from '@src/components/HamburgerMenu'
import PayPalDonateButton from '@src/components/PayPalDonateButton'
import SaveButtons from '@src/components/editor/SaveButtons'
import MapAutosuggest from '@src/components/editor/MapAutosuggest'

import routes from 'config/routes'

const EditorHeader = (props) => {
  const isEditorPath = props.currentPath === routes.editor

  return (
    <div className="EditorHeader__container">
      <div className="EditorHeader__navbar-wrapper">
        <Navbar>
          <HamburgerMenu>
            {!isEditorPath ? (
              <SaveButtons
                mapType={props.mapType}
                className="SaveButtons__hamburger-btn"
              />
            ) : null}
          </HamburgerMenu>
        </Navbar>
      </div>

      <div className="row EditorHeader__actionbar">
        <div className="col-xs-3">
          <div className="row middle-xs start-xs">
            <MapAutosuggest
              mapType={props.mapType}
              onMapTypeChange={props.onMapTypeChange}
              currentPath={props.currentPath}
            />

          </div>
        </div>
        <div className="col-xs-9">
          <div className="row middle-xs end-xs">

            {/* TODO: what to do with mailchimp popup? */}
            {/* <MailChimpPopup /> */}

            <PayPalDonateButton />

            <div className="hide-sm">
              {!isEditorPath && <SaveButtons mapType={props.mapType} />}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .EditorHeader__container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: ${editorHeaderZIndex};
        }

        .EditorHeader__navbar-wrapper {
          background-color: ${grey100};
        }

        .EditorHeader__actionbar {
          height: 40px;
          padding: 0 20px;
          border: 1px solid ${grey300};
          background-color: white;
        }
      `}</style>
    </div>
  )
}

EditorHeader.propTypes = {
  mapType: PropTypes.string.isRequired,
  onMapTypeChange: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
}

export default EditorHeader
