import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Link } from '@routes'
// import style from './EditMapView.css'
// import CommonEditor from '../CommonEditor'
// import LinearScaleEditor from '../LinearScaleEditor'
// import EquidistantScaleEditor from '../EquidistantScaleEditor'

const style = {}

class EditMap extends Component {
  // renderEditor() {
  //   const dataClassification = this.props.mapUi.get('dataClassification')
  //   const linearEditor = <LinearScaleEditor />
  //   const equidistantEditor = <EquidistantScaleEditor />
  //   const editors = {
  //     linear: linearEditor,
  //     equidistant: equidistantEditor,
  //   }

  //   return editors[dataClassification]
  // }

  render() {
    return (
      <div className={style.container}>
        <div className={style.wrapper}>
          <Link prefetch route={`/editor/${this.props.mapType}/upload`}>
            <a className={style.link}>
              Upload new data
            </a>
          </Link>
          <Link prefetch route={`/editor/${this.props.mapType}/edit-data`}>
            <a className={style.link}>
              Edit data
            </a>
          </Link>

          <h1>EditMap</h1>

          {/* <CommonEditor>
            {this.renderEditor()}
          </CommonEditor> */}
        </div>
      </div>
    )
  }
}

EditMap.propTypes = {
  mapUi: PropTypes.object.isRequired,
  mapType: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(EditMap)
