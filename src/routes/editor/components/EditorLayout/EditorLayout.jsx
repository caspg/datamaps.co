import React, { PropTypes } from 'react'

import style from './EditorLayout.css'
import Header from '../Header/Header'
import MapContainer from '../../containers/MapContainer'

const EditorLayout = (props) =>
  <div>
    <Header />

    <div className={style.wrapper}>
      <div className={style['map-column']}>
        <MapContainer />
      </div>

      <div className={style['editor-body-column']}>
        {props.children}
      </div>
    </div>
  </div>

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default EditorLayout
