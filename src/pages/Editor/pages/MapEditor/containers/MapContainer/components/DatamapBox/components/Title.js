import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) =>
  <g>
    <text className={props.className} x={props.coords.x} y={props.coords.y}>
      {props.text}
    </text>
  </g>

Title.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  coords: PropTypes.object.isRequired,
}

export default Title
