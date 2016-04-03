import React, { Component, PropTypes } from 'react'

import SortableHeader from './SortableHeader'
import DataTableRow from './DataTableRow'

export default class DataTable extends Component {
  renderTableRows() {
    return this.props.regionData.map((data, index) =>
      <DataTableRow
        key={index}
        regionName={data.regionName}
        value={data.value}
      />
    )
  }

  render() {
    return (
      <table className="datatable">
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
  regionData: PropTypes.array.isRequired,
}
