import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changeMapTitle, changeDataClassification } from '../../actions/mapUi'
import LinearScaleEditor from '../LinearScaleEditor'
import TitleEditor from '../../components/TitleEditor'
import DataClassificationSelect from '../../components/DataClassificationSelect'

export default class EditMapPage extends Component {
  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleClassificationChange = this.handleClassificationChange.bind(this)
  }

  handleTitleChange(title) {
    this.props.dispatch(changeMapTitle(title))
  }

  handleClassificationChange(classification) {
    this.props.dispatch(changeDataClassification(classification))
  }

  render() {
    console.log(this.props.mapUi.get('dataClassification'))

    return (
      <div className="edit-map-page">
        <TitleEditor
          text={this.props.mapUi.get('title')}
          onChange={this.handleTitleChange}
          placeholder="Add new title"
        />
        <DataClassificationSelect
          dataClassification={this.props.mapUi.get('dataClassification')}
          onClassificationChange={this.handleClassificationChange}
        />
        <LinearScaleEditor />
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

export default connect(mapStateToProps)(EditMapPage)
