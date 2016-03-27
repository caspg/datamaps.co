import React, { Component, PropTypes } from 'react';

export default class DatamapSubunit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: this.props.path(),
    }
  }

  render() {
    return (
      <path
        className="datamap-subunit"
        d={this.state.path}
      />
    );
  }
}

DatamapSubunit.propTypes = {
  path: PropTypes.func.isRequired,
}
