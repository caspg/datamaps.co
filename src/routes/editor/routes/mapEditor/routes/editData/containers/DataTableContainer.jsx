import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { editRow, toggleDirection } from 'redux/actions/regionData'
import DataTable from '../components/DataTable/DataTable'

class DataTableContainer extends Component {
  constructor(props) {
    super(props)
    this.handleRowEdit = this.handleRowEdit.bind(this)
    this.handleToggleDirection = this.handleToggleDirection.bind(this)
  }

  handleRowEdit(regionCode, value) {
    this.props.dispatch(editRow(regionCode, value, this.props.mapType))
  }

  handleToggleDirection(sortKey) {
    this.props.dispatch(toggleDirection(sortKey))
  }

  render() {
    const { sortedRegionData, sortState } = this.props

    return (!sortedRegionData.isEmpty() &&
      <DataTable
        regionData={sortedRegionData}
        sortState={sortState}
        onRowEdit={this.handleRowEdit}
        toggleDirection={this.handleToggleDirection}
      />
    )
  }
}

DataTableContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sortedRegionData: PropTypes.instanceOf(Map).isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
  mapType: PropTypes.string.isRequired,
}

function sortCollection(sortState, regionData) {
  const sortKey = sortState.get('key')
  const direction = (sortState.get('direction') === 'ASC') ? 1 : -1
  const sortValue = (regionDatum) => regionData.get(regionDatum.get('code')).get(sortKey)

  if (regionData.isEmpty()) {
    return regionData
  }

  return regionData.sort((a, b) => {
    if (sortKey === 'value' && a.get('value') === '') return 1
    if (sortKey === 'value' && b.get('value') === '') return -1

    if (sortValue(a) > sortValue(b)) return 1 * direction
    if (sortValue(a) < sortValue(b)) return -1 * direction
    return 0
  })
}

function mapStateToProps(state) {
  const { sortState, regionData, mapType } = state
  const currentRegionData = regionData.get(mapType, Map())

  return {
    sortedRegionData: sortCollection(sortState, currentRegionData),
    sortState,
    mapType,
  }
}

export default connect(mapStateToProps)(DataTableContainer)
