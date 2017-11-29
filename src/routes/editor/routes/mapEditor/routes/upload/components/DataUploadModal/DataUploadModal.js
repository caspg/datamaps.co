import React, { PropTypes } from 'react'
import Modal from 'react-modal'

import style from './DataUploadModal.css'
import DataUploadContainer from '../../containers/DataUploadContainer'

const DataUploadModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.onClose}
    className={style.modal}
    overlayClassName={style.overlay}
    portalClassName={style.portal}
  >
    <button
      className={style.closebutton}
      onClick={props.onClose}
    >
      X
    </button>

    <DataUploadContainer
      data={props.data}
      mapType={props.mapType}
    />
  </Modal>
)

DataUploadModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  mapType: PropTypes.string.isRequired,
}

export default DataUploadModal
