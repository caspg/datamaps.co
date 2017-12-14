import React, { PropTypes } from 'react'

import { grey300 } from '@src/styles/colors'

HoverInfo.propTypes = {
  position: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

function HoverInfo(props) {
  const hoverInfoStyle = {
    left: props.position.get('x') + 20,
    top: props.position.get('y') - 90 + 20, // 90px == height of header
    display: props.active ? 'block' : 'none',
  }

  return (
    <div className="HoverInfo" style={hoverInfoStyle}>
      <p>{props.name}</p>
      <p>{props.value}</p>

      <style jsx>{`
        .HoverInfo {
          position: fixed;
          min-width: 100px;
          min-height: 50px;
          border: 1px solid ${grey300};
          background-color: white;
          box-shadow: 1px 1px 5px ${grey300};
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

export default HoverInfo
