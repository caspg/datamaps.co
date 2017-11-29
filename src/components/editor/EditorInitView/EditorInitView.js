import React, { PropTypes } from 'react'

import style from './EditorInitView.css'
import maps from 'config/maps'
import MapThumb from '../MapThumb/MapThumb'
import Footer from 'components/Footer/Footer'

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
    <div className={style.container}>
      <div className={style.thumbs}>
        <div className="row center-xs">
          <div className="col-sm-10">
            {mapThumbs}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
EditorInitView.propTypes = {
  handleMapSelect: PropTypes.func.isRequired,
}

export default EditorInitView
