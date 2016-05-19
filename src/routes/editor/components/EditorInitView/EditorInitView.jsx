import React, { PropTypes } from 'react'

import style from './EditorInitView.css'
import maps from 'config/maps'
import MapThumb from '../MapThumb/MapThumb'

const EditorInitView = (props) => {
  const mapThumbs = maps.types.map((type, i) =>
    <MapThumb
      key={i}
      code={type.code}
      displayName={type.displayName}
      handleMapSelect={props.handleMapSelect}
    />
  )

  return (
    <div>
      <div className={style.thumbs}>
        <div className="row center-xs">
          {mapThumbs}
        </div>
      </div>
    </div>
  )
}
EditorInitView.propTypes = {
  handleMapSelect: PropTypes.func.isRequired,
}

export default EditorInitView
