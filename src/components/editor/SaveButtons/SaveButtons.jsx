import React, { PropTypes } from 'react'

import { downloadPng, downloadSvg } from 'utils/downloadMap'
import style from './SaveButtons.css'

const SaveButtons = props =>
  <div>
    <button
      className={`button ${style[props.className]}`}
      onClick={() => downloadSvg(props.mapType)}
    >
      Save svg
    </button>

    <button
      className={`button ${style[props.className]}`}
      onClick={() => downloadPng(props.mapType)}
    >
      Save png
    </button>
  </div>

SaveButtons.defaultProps = {
  className: 'save-btn',
}

SaveButtons.propTypes = {
  mapType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default SaveButtons
