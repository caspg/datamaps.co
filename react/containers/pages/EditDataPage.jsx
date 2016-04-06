import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { editRow } from '../../actions/regionData'
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

  handleToggleDirection() {
    console.log('handleToggleDirection')
  }

  render() {
    return (
      <div>
        <DataTable
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
  sortState: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
    sortState: state.sortState,
  }
}

export default connect(mapStateToProps)(EditDataPage)
