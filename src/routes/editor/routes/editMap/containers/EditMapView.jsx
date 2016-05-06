import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import CommonEditor from './CommonEditor'
import LinearScaleEditor from './LinearScaleEditor'
// import EquidistantScaleEditor from './EquidistantScaleEditor'

class EditMapView extends Component {
  renderEditor() {
    const dataClassification = this.props.mapUi.get('dataClassification')
    const linearEditor = <LinearScaleEditor />
    // const equidistantEditor = <EquidistantScaleEditor />
    const editors = {
      linear: linearEditor,
      // equidistant: equidistantEditor,
    }

    return editors[dataClassification]
  }

  render() {
    return (
      <div>
        <CommonEditor />
        {this.renderEditor()}
      </div>
    )
  }
}

EditMapView.propTypes = {
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(EditMapView)
