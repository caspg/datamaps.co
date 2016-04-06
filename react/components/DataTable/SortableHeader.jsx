import React, { Component, PropTypes } from 'react';

export default class SortableHeader extends Component {
  render() {
    return (
      <th>
        <h6>{this.props.label}</h6>
        <span className="sort-arrow asc"></span>
      </th>
    );
  }
}

SortableHeader.propTypes = {
  label: PropTypes.string.isRequired,
}
