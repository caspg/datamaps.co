import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { editRow } from '../../actions/regionData'
import DataTable from '../../components/DataTable'

class EditDataPage extends Component {
  constructor(props) {
    super(props)
    this.handleRowEdit = this.handleRowEdit.bind(this)
  }

  handleRowEdit(regionName, value) {
    this.props.dispatch(editRow(regionName, value))
  }

  render() {
    return (
      <div>
        <DataTable
          regionData={this.props.regionData}
          onRowEdit={this.handleRowEdit}
        />
      </div>
    )
  }
}

EditDataPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  regionData: PropTypes.instanceOf(List).isRequired,
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
  }
}

export default connect(mapStateToProps)(EditDataPage)
