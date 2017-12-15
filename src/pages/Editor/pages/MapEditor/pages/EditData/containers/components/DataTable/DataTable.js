import React, { Component } from 'react'
import { Map } from 'immutable'
import PropTypes from 'prop-types'

import SortableHeader from './components/SortableHeader'
import DataTableRow from './components/DataTableRow'

export default class DataTable extends Component {
  sortableHeaders() {
    const headers = [
      { label: 'STATES NAME', sortKey: 'name' },
      { label: 'VALUE', sortKey: 'value' },
    ]

    return headers.map((header, index) =>
      <SortableHeader
        key={index}
        label={header.label}
        sortKey={header.sortKey}
        toggleDirection={this.props.toggleDirection}
        sortState={this.props.sortState}
      />
    )
  }

  renderTableRows() {
    const { regionData } = this.props
    return regionData.valueSeq().map((regionDatum, index) =>
      <DataTableRow
        key={index}
        regionName={regionDatum.get('name')}
        regionCode={regionDatum.get('code')}
        value={regionDatum.get('value')}
        onRowEdit={this.props.onRowEdit}
      />
    )
  }

  render() {
    return (
      <table className="DataTable">
        <thead>
          <tr>
            {this.sortableHeaders()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>

        <style jsx>{`
          .DataTable {
            margin-top: 30px;
            width: 100%;
            border-collapse: collapse;
          }
        `}</style>
      </table>
    )
  }
}

DataTable.propTypes = {
  regionData: PropTypes.instanceOf(Map).isRequired,
  onRowEdit: PropTypes.func.isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
  toggleDirection: PropTypes.func.isRequired,
}
