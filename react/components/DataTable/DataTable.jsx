import React, { Component } from 'react'

import SortableHeader from './SortableHeader'

export default class DataTable extends Component {
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
      </table>
    )
  }
}
