import React, { Component, PropTypes } from 'react'

import style from './DataTableRow.css'
import NumericInput from 'components/NumericInput/NumericInput'

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
        <td className={style.cell}>
          {this.props.regionName}
        </td>
        <td className={style.cell}>
          <NumericInput
            className="table-input"
            value={this.props.value}
            onBlur={this.handleInputBlur}
          />
        </td>
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
