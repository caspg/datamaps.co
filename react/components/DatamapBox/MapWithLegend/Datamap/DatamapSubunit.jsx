import React, { Component, PropTypes } from 'react';

export default class DatamapSubunit extends Component {
  render() {
    return (
      <path
        className="datamap-subunit"
        d={this.props.path()}
      />
    );
  }
}

DatamapSubunit.propTypes = {
  path: PropTypes.func.isRequired,
}
