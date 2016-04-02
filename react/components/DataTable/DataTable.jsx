import React, { Component, PropTypes } from 'react'

import SortableHeader from './SortableHeader'
import DataTableRow from './DataTableRow'

export default class DataTable extends Component {
  renderTableRows() {
    return this.props.emptyData.map((data, index) => {
      return (
        <DataTableRow
          key={index}
          regionName={data.regionName}
          value={data.value}
        />
      )
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <SortableHeader
              label="STATES NAME"
            />
            <SortableHeader
              label="VALUE"
            />
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    )
  }
}

DataTable.propTypes = {
  emptyData: PropTypes.array.isRequired,
}
