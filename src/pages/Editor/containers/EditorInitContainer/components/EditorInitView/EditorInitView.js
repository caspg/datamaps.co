import React, { PropTypes } from 'react'

import maps from '@src/config/maps'
import Footer from '@src/components/Footer'

import MapThumb from './components/MapThumb'

EditorInitView.propTypes = {
  handleMapSelect: PropTypes.func.isRequired,
}

function EditorInitView(props) {
  const mapThumbs = maps.types.map((type, i) =>
    <MapThumb
      key={i}
      code={type.code}
      displayName={type.displayName}
      handleMapSelect={props.handleMapSelect}
    />
  )

  return (
    <div className="EditorInitView__container">
      <div className="EditorInitView__thumbs">
        <div className="row center-xs">
          <div className="col-sm-10">
            {mapThumbs}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .EditorInitView__container {
          margin-top: 70px;
        }

        .EditorInitView__thumbs {
          padding-top: 80px;
          padding-bottom: 120px;
        }
      `}</style>
    </div>
  )
}

export default EditorInitView
