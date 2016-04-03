import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { List } from 'immutable'

import SortableHeader from './SortableHeader'
import DataTableRow from './DataTableRow'

export default class DataTable extends Component {
  renderTableRows() {
    return this.props.regionData.map((data, index) =>
      <DataTableRow
        key={index}
        regionName={data.get('regionName')}
        value={data.get('value')}
        onRowEdit={this.props.onRowEdit}
      />
    )
  }

  render() {
    return (
      <div className="datatable-container">
        <Link to="/editor/upload">upload new data</Link>
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
      </div>
    )
  }
}

DataTable.propTypes = {
  regionData: PropTypes.instanceOf(List).isRequired,
  onRowEdit: PropTypes.func.isRequired,
}
