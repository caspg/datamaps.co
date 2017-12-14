import React, { PropTypes } from 'react'

// import style from './MapEditorLayout.css'
// import MapContainer from 'containers/editor/MapContainer'
import Footer from '@src/components/Footer'

const style = {};

const MapEditorLayout = (props) =>
  <div className={style.container}>
    <div className={style['map-column']}>
      {/* {props.isDataReady && <MapContainer />} */}
    </div>

    <div className={style['editor-body-column']}>
      {props.isDataReady && props.children}

      <Footer>
        <i>
          Color schemes from <a style={{ color: 'inherit' }} href="http://www.colorbrewer.org" title="colorbrewer" target="_blank">colorbrewer.org</a>
        </i>
      </Footer>
    </div>
  </div>

MapEditorLayout.propTypes = {
  isDataReady: PropTypes.bool.isRequired,

  children: PropTypes.node,
}

export default MapEditorLayout
