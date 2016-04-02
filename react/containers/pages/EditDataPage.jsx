import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import DataTable from '../../components/DataTable'

class EditDataPage extends Component {
  render() {
    return (
      <div>
        <DataTable
          emptyData={this.props.emptyData}
        />
      </div>
    )
  }
}

EditDataPage.propTypes = {
  emptyData: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    emptyData: state.emptyData,
  }
}

export default connect(mapStateToProps)(EditDataPage);
