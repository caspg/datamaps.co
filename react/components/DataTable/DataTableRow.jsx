import React, { Component, PropTypes } from 'react'

import NumericInput from '../NumericInput'

export default class DataTableRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.regionName}
        </td>
        <td>
          <NumericInput
            value={this.props.value}
            onBlur={() => console.log('NumericInput onBlur')}
          />
        </td>
      </tr>
    )
  }
}

DataTableRow.propTypes = {
  regionName: PropTypes.string.isRequired,
  value: PropTypes.number,
}
