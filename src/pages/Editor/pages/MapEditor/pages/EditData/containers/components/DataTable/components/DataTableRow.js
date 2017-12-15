import React, { Component, PropTypes } from 'react'

import NumericInput from '@src/components/NumericInput'
import { grey300 } from '@src/styles/colors'

export default class DataTableRow extends Component {
  constructor(props) {
    super(props)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value || nextProps.regionName !== this.props.regionName
  }

  handleInputBlur(value) {
    const { onRowEdit, regionCode } = this.props
    onRowEdit(regionCode, value)
  }

  render() {
    return (
      <tr>
        <td className="DataTableRow__cell">
          {this.props.regionName}
        </td>
        <td className="DataTableRow__cell">
          <NumericInput
            className="NumericInput__table-input"
            value={this.props.value}
            onBlur={this.handleInputBlur}
          />
        </td>

        <style jsx>{`
          .DataTableRow__cell {
            width: 50%;
            height: 35px;
            padding: 0;
            border: 1px solid ${grey300};
            border-left: none;
          }

          .DataTableRow__cell:first-of-type {
            padding-left: 15px;
          }
        `}</style>
      </tr>
    )
  }
}

DataTableRow.propTypes = {
  regionName: PropTypes.string.isRequired,
  regionCode: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onRowEdit: PropTypes.func.isRequired,
}
