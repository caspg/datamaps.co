import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, List } from 'immutable'

import { editRow, toggleDirection } from '../../actions/regionData'
import DataTable from '../../components/DataTable'

class EditDataPage extends Component {
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
      <div>
        <DataTable
          regionCodes={this.props.regionCodes}
          regionData={this.props.regionData}
          sortState={this.props.sortState}
          onRowEdit={this.handleRowEdit}
          toggleDirection={this.handleToggleDirection}
        />
      </div>
    )
  }
}

EditDataPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  regionData: PropTypes.instanceOf(Map).isRequired,
  regionCodes: PropTypes.instanceOf(List).isRequired,
  sortState: PropTypes.instanceOf(Map).isRequired,
}

function sortCollection(collection, sortState, regionData) {
  const sortKey = sortState.get('key')

  switch (sortState.get('direction')) {
    case 'ASC':
      return collection.sort((a, b) => {
        if (regionData.get(a).get(sortKey) > regionData.get(b).get(sortKey)) return 1
        if (regionData.get(a).get(sortKey) < regionData.get(b).get(sortKey)) return -1
        return 0
      })

    case 'DESC':
      return collection.sort((a, b) => {
        if (regionData.get(a).get(sortKey) > regionData.get(b).get(sortKey)) return -1
        if (regionData.get(a).get(sortKey) < regionData.get(b).get(sortKey)) return 1
        return 0
      })

    default:
      return collection
  }
}

function mapStateToProps(state) {
  const { regionCodes, sortState, regionData } = state

  return {
    regionCodes: sortCollection(regionCodes, sortState, regionData),
    regionData,
    sortState,
  }
}

export default connect(mapStateToProps)(EditDataPage)
