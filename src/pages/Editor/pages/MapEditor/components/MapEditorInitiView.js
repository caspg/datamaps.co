import React, { PropTypes } from 'react'

import { Link } from '@routes'

MapEditorInitiView.propTypes = {
  mapType: PropTypes.string.isRequired,
}

function MapEditorInitiView(props) {
  return (
    <div className="MapEditorInitiView">
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="MapEditorInitiView__wrapper">
            <Link prefetch route={`/editor/${props.mapType}/upload`}>
              <a className="button MapEditorInitiView__button">
                Upload CSV data file
              </a>
            </Link>
            <Link prefetch route={`/editor/${props.mapType}/edit-data`}>
              <a className="button MapEditorInitiView__button">
                go to data table
              </a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .MapEditorInitiView {
          margin-bottom: 20px;
        }

        .MapEditorInitiView__wrapper {
          margin-top: 100px;
        }

        .MapEditorInitiView__button {
          margin-bottom: 20px;
          min-width: 300px;
        }
      `}</style>
    </div>
  )
}

export default MapEditorInitiView
