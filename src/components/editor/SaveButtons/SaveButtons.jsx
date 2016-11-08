import React, { PropTypes } from 'react'

import { downloadPng, downloadSvg } from 'utils/downloadMap'
import style from './SaveButtons.css'

const SaveButtons = props =>
  <div>
    <button
      className={`button ${style['save-btn']}`}
      onClick={() => downloadSvg(props.mapType)}
    >
      Save svg
    </button>

    <button
      className={`button ${style['save-btn']}`}
      onClick={() => downloadPng(props.mapType)}
    >
      Save png
    </button>
  </div>

SaveButtons.propTypes = {
  mapType: PropTypes.string.isRequired,
}

export default SaveButtons
