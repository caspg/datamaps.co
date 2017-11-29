import React, { Component, PropTypes } from 'react'
import { Map, List } from 'immutable'

import style from './DataTable.css'
import SortableHeader from '../SortableHeader/SortableHeader'
import DataTableRow from '../DataTableRow/DataTableRow'

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
      <table className={style.table}>
        <thead>
          <tr>
            {this.sortableHeaders()}
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
  regionData: PropTypes.instanceOf(Map).isRequired,
  onRowEdit: PropTypes.func.isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
  toggleDirection: PropTypes.func.isRequired,
}
