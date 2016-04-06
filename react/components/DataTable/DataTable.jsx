import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Map } from 'immutable'

import SortableHeader from './SortableHeader'
import DataTableRow from './DataTableRow'
import { stateCodes } from '../../data/states-empty-data'

export default class DataTable extends Component {
  renderTableRows() {
    const { regionData } = this.props
    return stateCodes.map((code, index) => {
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
  regionData: PropTypes.instanceOf(Map).isRequired,
  onRowEdit: PropTypes.func.isRequired,
}
