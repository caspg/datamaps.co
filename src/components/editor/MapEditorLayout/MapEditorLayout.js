import React, { PropTypes } from 'react'

import style from './MapEditorLayout.css'
import MapContainer from 'containers/editor/MapContainer'
import Footer from 'components/Footer/Footer'

const MapEditorLayout = (props) =>
  <div className={style.container}>
    <div className={style['map-column']}>
      <MapContainer />
    </div>

    <div className={style['editor-body-column']}>
      {props.children}

      <Footer>
        <i>
          Color schemes from <a style={{ color: 'inherit' }} href="http://www.colorbrewer.org" title="colorbrewer" target="_blank">colorbrewer.org</a>
        </i>
      </Footer>
    </div>
  </div>

MapEditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapEditorLayout
