import React, { PropTypes } from 'react'

import style from './MapEditorLayout.css'
import MapContainer from '../../containers/MapContainer'
import EditorFooter from '../EditorFooter/EditorFooter'

const MapEditorLayout = (props) =>
  <div className={style.wrapper}>
    <div className={style['map-column']}>
      <MapContainer />
    </div>

    <div className={style['editor-body-column']}>
      {props.children}

      <EditorFooter />
    </div>
  </div>

MapEditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MapEditorLayout
