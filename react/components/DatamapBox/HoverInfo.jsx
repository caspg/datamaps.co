import React, { Component, PropTypes } from 'react';

export default class HoverInfo extends Component {
  render() {
    const hoverInfoStyle = {
      width: 100,
      height: 80,
      border: '1px solid #ddd',
      position: 'absolute',
      left: this.props.position.x + 20,
      top: this.props.position.y - 50 + 20,
      display: this.props.active ? 'block' : 'none',
      background: '#fff',
      boxShadow: '1px 1px 5px #ddd',
      padding: 10,
    }

    return (
      <div style={hoverInfoStyle}>
        <p>{this.props.name}</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

HoverInfo.propTypes = {
  position: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
}
