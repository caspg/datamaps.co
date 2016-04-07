import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Map, List } from 'immutable'

import SortableHeader from './SortableHeader'
import DataTableRow from './DataTableRow'

export default class DataTable extends Component {
  sortableHeaders() {
    const headers = [
      { label: 'STATES NAME', sortKey: 'regionName' },
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
    const { regionData, regionCodes } = this.props
    return regionCodes.map((code, index) => {
      const regionDatum = regionData.get(code)

      return (
        <DataTableRow
          key={index}
          regionName={regionDatum.get('regionName')}
          regionCode={regionDatum.get('code')}
          value={regionDatum.get('value')}
          onRowEdit={this.props.onRowEdit}
        />
      )
    })
  }

  render() {
    return (
      <div className="datatable-container">
        <Link className="button" to="/editor/edit-map">edit map style</Link>
        <Link to="/editor/upload">upload new data</Link>
        <table>
          <thead>
            <tr>
              {this.sortableHeaders()}
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
  regionCodes: PropTypes.instanceOf(List).isRequired,
  regionData: PropTypes.instanceOf(Map).isRequired,
  onRowEdit: PropTypes.func.isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
  toggleDirection: PropTypes.func.isRequired,
}
