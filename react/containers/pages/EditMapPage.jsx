import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changeMapTitle } from '../../actions/mapUi'
import TitleEditor from '../../components/TitleEditor'

export default class EditMapPage extends Component {
  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleTitleChange(title) {
    this.props.dispatch(changeMapTitle(title));
  }

  render() {
    return (
      <div className="edit-map-page">
        <TitleEditor
          text={this.props.mapUi.get('title')}
          onChange={this.handleTitleChange}
          placeholder="Add new title"
        />
      </div>
    )
  }
}

EditMapPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {

    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(EditMapPage);
