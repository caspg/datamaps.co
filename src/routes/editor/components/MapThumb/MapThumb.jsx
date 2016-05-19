import React from 'react'

import style from './MapThumb.css'

const MapThumb = (props) =>
  <div className={style.container}>
    <img className={style.image} src={`/images/maps/${props.code}.jpg`} alt={props.displayName} />
  </div>

export default MapThumb
