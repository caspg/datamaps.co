import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ColorSchemePicker from '../components/ColorSchemePicker'

export class EquidistantScaleEditor extends Component {
  constructor(props) {
    super(props)
    this.handlePalletePicked = this.handlePalletePicked.bind(this)
  }

  handlePalletePicked(palleteKey) {
    console.log(palleteKey)
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
  mapUi: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    mapUi: state.mapUi,
  }
}

export default connect(mapStateToProps)(EquidistantScaleEditor)
