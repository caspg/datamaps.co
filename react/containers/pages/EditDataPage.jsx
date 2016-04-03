import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import DataTable from '../../components/DataTable'

class EditDataPage extends Component {
  render() {
    return (
      <div>
        <DataTable
          regionData={this.props.regionData}
        />
      </div>
    )
  }
}

EditDataPage.propTypes = {
  regionData: PropTypes.instanceOf(List).isRequired,
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData,
  }
}

export default connect(mapStateToProps)(EditDataPage);
