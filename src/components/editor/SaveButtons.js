import React, { PropTypes } from 'react'

import { downloadPng, downloadSvg } from '@src/utils/downloadMap'

const SaveButtons = props => (
  <div>
    <button
      className={`button ${props.className}}`}
      onClick={() => downloadSvg(props.mapType)}
    >
      Save svg
    </button>

    <button
      className={`button ${props.className}}`}
      onClick={() => downloadPng(props.mapType)}
    >
      Save png
    </button>

    <style jsx>{`
      :global(.SaveButtons__save-btn) {
        margin-top: 5px;
        margin-right: 15px;
        margin-bottom: 0;
        height: 30px;
        line-height: 30px;
      }

      @media(min-width: 768px) {
        :global(.SaveButtons__save-btn) {
          margin-right: 0;
          margin-left: 15px;
        }
      }

      :global(.SaveButtons__hamburger-btn) {
        margin: 10px;
        background-color: white;
      }

      :global(.SaveButtons__hamburger-btn:first-of-type) {
        margin-right: 0;
      }
    `}</style>
  </div>
)

SaveButtons.defaultProps = {
  className: 'SaveButtons__save-btn',
}

SaveButtons.propTypes = {
  mapType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default SaveButtons
