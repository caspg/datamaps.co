import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changeMapTitle, changeLegendTitle, changeDataClassification } from '../../actions/mapUi'
import LinearScaleEditor from '../LinearScaleEditor'
import EquidistantScaleEditor from '../EquidistantScaleEditor'
import TitleEditor from '../../components/TitleEditor'
import DataClassificationSelect from '../../components/DataClassificationSelect'

export default class EditMapPage extends Component {
  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleClassificationChange = this.handleClassificationChange.bind(this)
    this.handleLegendTitleChange = this.handleLegendTitleChange.bind(this)
  }

  handleTitleChange(title) {
    this.props.dispatch(changeMapTitle(title))
  }

  handleLegendTitleChange(title) {
    this.props.dispatch(changeLegendTitle(title))
  }

  handleClassificationChange(classification) {
    this.props.dispatch(changeDataClassification(classification))
  }

  renderEditor() {
    const dataClassification = this.props.mapUi.get('dataClassification')
    const linearEditor = <LinearScaleEditor />
    const equidistantEditor = <EquidistantScaleEditor />
    const editors = {
      linear: linearEditor,
      equidistant: equidistantEditor,
    }

    return editors[dataClassification]
  }

  render() {
    return (
      <div className="edit-map-page">
        <TitleEditor
          text={this.props.mapUi.get('title')}
          onChange={this.handleTitleChange}
          placeholder="Add a new title"
        />
        <TitleEditor
          text={this.props.mapUi.get('legendTitle')}
          onChange={this.handleLegendTitleChange}
          placeholder="Add a new legend title"
        />
        <DataClassificationSelect
          dataClassification={this.props.mapUi.get('dataClassification')}
          onClassificationChange={this.handleClassificationChange}
        />
        {this.renderEditor()}
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
