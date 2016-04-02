import React, { Component, PropTypes } from 'react';

export default class DataTableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.regionName}
        </td>
        <td>
          NumericInput component
        </td>
        <td>
          <h3>+</h3>
        </td>
      </tr>
    );
  }
}

DataTableRow.propTypes = {
  regionName: PropTypes.string.isRequired,
  value: PropTypes.number,
}
