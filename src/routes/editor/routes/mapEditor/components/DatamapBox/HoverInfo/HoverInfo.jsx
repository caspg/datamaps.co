import React, { PropTypes } from 'react'

import style from './HoverInfo.css'

const HoverInfo = (props) => {
  const hoverInfoStyle = {
    left: props.position.get('x') + 20,
    top: props.position.get('y') - 90 +20, // 90px == height of header
    display: props.active ? 'block' : 'none',
  }

  return (
    <div className={style.hoverinfo} style={hoverInfoStyle}>
      <p>{props.name}</p>
      <p>{props.value}</p>
    </div>
  )
}

HoverInfo.propTypes = {
  position: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default HoverInfo
