import React, { Component } from 'react'

import SaveButtons from '../components/SaveButtons'

export default class EditorHeader extends Component {
  render() {
    return (
      <div className="editor-secondary-header row middle-xs end-xs">
        <SaveButtons />
      </div>
    )
  }
}
