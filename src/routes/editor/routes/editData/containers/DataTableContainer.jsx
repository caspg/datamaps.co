import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, List } from 'immutable'

import { editRow, toggleDirection } from 'redux/actions/regionData'
import DataTable from '../components/DataTable/DataTable'

class DataTableContainer extends Component {
  constructor(props) {
    super(props)
    this.handleRowEdit = this.handleRowEdit.bind(this)
    this.handleToggleDirection = this.handleToggleDirection.bind(this)
  }

  handleRowEdit(regionCode, value) {
    this.props.dispatch(editRow(regionCode, value))
  }

  handleToggleDirection(sortKey) {
    this.props.dispatch(toggleDirection(sortKey))
  }

  render() {
    return (
      <DataTable
        regionCodes={this.props.regionCodes}
        regionData={this.props.regionData}
        sortState={this.props.sortState}
        onRowEdit={this.handleRowEdit}
        toggleDirection={this.handleToggleDirection}
      />
    )
  }
}

DataTableContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  regionData: PropTypes.instanceOf(Map).isRequired,
  regionCodes: PropTypes.instanceOf(List).isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
}

function sortCollection(regionCodes, sortState, regionData) {
  const sortKey = sortState.get('key')
  const direction = (sortState.get('direction') === 'ASC') ? 1 : -1
  const sortValue = (code) => regionData.get(code).get(sortKey)

  return regionCodes.sort((a, b) => {
    if (sortValue(a) > sortValue(b)) return 1 * direction
    if (sortValue(a) < sortValue(b)) return -1 * direction
    return 0
  })
}

function mapStateToProps(state) {
  const { regionCodes, sortState, regionData } = state

  return {
    regionCodes: sortCollection(regionCodes, sortState, regionData),
    regionData,
    sortState,
  }
}

export default connect(mapStateToProps)(DataTableContainer)
