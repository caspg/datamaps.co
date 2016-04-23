import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as mapUiActions from '../actions/mapUi'
import colorbrewer from '../data/colorbrewer'
import ColorSchemePicker from '../components/ColorSchemePicker'

export class EquidistantScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
  }

  handlePalletePicked(palleteKey) {
    const classesCount = this.props.mapUi.getIn(['equidistant', 'classesCount'])
    const pallete = colorbrewer[palleteKey][classesCount]
    this.props.dispatch(mapUiActions.changeColorPallete(palleteKey, pallete))
  }

  render() {
    const palleteKey = this.props.mapUi.getIn(['equidistant', 'palleteKey'])

    return (
      <div className="equidistant-colors-editor">
        <ColorSchemePicker
          palleteKey={palleteKey}
          palletePicked={this.handlePalletePicked}
        />
      </div>
    )
  }
}

EquidistantScaleEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(EquidistantScaleEditor)
