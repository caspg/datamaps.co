import React, { Component } from 'react'

export default class EditorHeader extends Component {
  render() {
    return (
      <div className="editor-secondary-header row middle-xs end-xs">
        <button className="button btn-svg">Save svg</button>
        <button className="button btn-png">Save png</button>
      </div>
    )
  }
}
