import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { downloadPng, downloadSvg } from '@src/utils/downloadMap'

import PayPallModal from './PayPallModal'

const DOWNLOADS_COUNT = 'DOWNLOADS_COUNT'
const DOWNLOADS_LIMIT = 3

class SaveButtons extends Component {
  static defaultProps = {
    className: 'SaveButtons__save-btn',
  }

  static propTypes = {
    mapType: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }

  state = {
    paypallModalIsOpen: false,
  }

  handleDownloadButton = () => {
    const newDownloadsCount = Number(localStorage.getItem(DOWNLOADS_COUNT)) + 1

    if (newDownloadsCount > DOWNLOADS_LIMIT) {
      localStorage.setItem(DOWNLOADS_COUNT, 0)

      setTimeout(() => {
        this.setState({ paypallModalIsOpen: true })
      }, 3000)
    } else {
      localStorage.setItem(DOWNLOADS_COUNT, newDownloadsCount)
    }
  }

  handleDownloadSVG = () => {
    this.handleDownloadButton()
    downloadSvg(this.props.mapType)
  }

  handleDownloadPNG = () => {
    this.handleDownloadButton()
    downloadPng(this.props.mapType)
  }

  handlePayPallModalClose = () => {
    this.setState({ paypallModalIsOpen: false })
  }

  render() {
    return (
      <div>
        <PayPallModal
          onClose={this.handlePayPallModalClose}
          modalIsOpen={this.state.paypallModalIsOpen}
        />

        <button
          className={`SaveButtons__save-btn ${this.props.className}`}
          onClick={this.handleDownloadSVG}
        >
          Save svg
        </button>

        <button
          className={`SaveButtons__save-btn ${this.props.className}`}
          onClick={this.handleDownloadPNG}
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
  }
}

export default SaveButtons
