import React, { PropTypes } from 'react'

import style from './MapEditorLayout.css'
import MapContainer from '../../containers/MapContainer'

const MapEditorLayout = (props) =>
  <div>
    <div className={style.wrapper}>
      <div className={style['map-column']}>
        <MapContainer mapType={props.mapType} />
      </div>

      <div className={style['editor-body-column']}>
        {props.children}
      </div>
    </div>
  </div>

MapEditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
  mapType: PropTypes.string.isRequired,
}

export default MapEditorLayout
