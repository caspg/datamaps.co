import React, { PropTypes } from 'react';

const Title = (props) =>
  <g>
    <text style={props.style} x={props.coords.x} y={props.coords.y}>
      {props.text}
    </text>
  </g>

Title.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  coords: PropTypes.object.isRequired,
}

export default Title;
