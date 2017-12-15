import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import { dataUploadModalZIndex } from '@src/styles/variables'
import { grey500 } from '@src/styles/colors'

import DataUploadContainer from '../../../containers/DataUploadContainer'

const DataUploadModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.onClose}
    className="DataUploadModal"
    overlayClassName="DataUploadModal__overlay"
    portalClassName="DataUploadModal__portal"
  >
    <button
      className="DataUploadModal__close-button"
      onClick={props.onClose}
    >
      X
    </button>

    <DataUploadContainer
      data={props.data}
      mapType={props.mapType}
    />

    <style jsx global>{`
      .DataUploadModal {
        margin-top: 60px;
        width: 100%;
        padding-bottom: 20px;
        background-color: white;
      }

      .DataUploadModal:focus {
        outline: none;
      }

      .DataUploadModal__overlay {
        position: fixed;
        overflow-x: scroll;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(66, 66, 66, 0.9);
      }

      .DataUploadModal__portal {
        position: relative;
        z-index: ${dataUploadModalZIndex};
      }

      .DataUploadModal__close-button {
        float: right;
        margin: 10px;
        padding: 0 20px;
        font-size: 18px;
        font-weight: 300;
        color: ${grey500};
        border-color: ${grey500};
      }
    `}</style>
  </Modal>
)

DataUploadModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  mapType: PropTypes.string.isRequired,
}

export default DataUploadModal
