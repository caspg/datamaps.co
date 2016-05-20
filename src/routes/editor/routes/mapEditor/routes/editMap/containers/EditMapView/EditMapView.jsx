import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import routes from 'config/routes'
import style from './EditMapView.css'
import CommonEditor from '../CommonEditor'
import LinearScaleEditor from '../LinearScaleEditor'
import EquidistantScaleEditor from '../EquidistantScaleEditor'

class EditMapView extends Component {
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
      <div className={style.container}>
        <div className={style.wrapper}>
          <Link to={`/editor/${this.props.mapType}/upload`} className={style.link}>
            Upload new data
          </Link>
          <Link to={`/editor/${this.props.mapType}/edit-data`} className={style.link}>
            Edit data
          </Link>

          <CommonEditor>
            {this.renderEditor()}
          </CommonEditor>
        </div>
      </div>
    )
  }
}

EditMapView.propTypes = {
  mapUi: PropTypes.object.isRequired,
  mapType: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(EditMapView)
