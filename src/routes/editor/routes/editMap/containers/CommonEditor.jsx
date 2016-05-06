import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { changeMapTitle, changeLegendTitle, changeDataClassification } from 'redux/actions/mapUi'
import TitleEditor from '../components/TitleEditor/TitleEditor'
import DataClassificationSelect from '../components/DataClassificationSelect/DataClassificationSelect'

class CommonEditor extends Component {
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

  render() {
    return (
      <div>
        <DataClassificationSelect
          dataClassification={this.props.mapUi.get('dataClassification')}
          onClassificationChange={this.handleClassificationChange}
        />
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
      </div>
    )
  }
}

CommonEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(CommonEditor)
