import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { setMapType } from 'redux/actions'

// import EditorInitView from 'components/editor/EditorInitView/EditorInitView'

class EditorInitContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    mapType: PropTypes.string.isRequired,
    mainPath: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.handleMapSelect = this.handleMapSelect.bind(this)
  }

  handleMapSelect(mapType) {
    const { dispatch, mainPath } = this.props

    if (this.props.mapType !== mapType) {
      dispatch(setMapType(mapType))
    }

    dispatch(push(`${mainPath}/${mapType}`))
  }

  render() {
    return (
      // <EditorInitView handleMapSelect={this.handleMapSelect} />
      <h1>
        EditorInitContainer
      </h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType,
  }
}

export default connect(mapStateToProps)(EditorInitContainer)
