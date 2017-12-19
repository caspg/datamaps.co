import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import { paypallModalZIndex } from '@src/styles/variables'
import { grey500 } from '@src/styles/colors'

import PayPalDonateButton from './PayPalDonateButton'

PayPallModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

function PayPallModal(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      className="PayPallModal"
      overlayClassName="PayPallModal__overlay"
      portalClassName="PayPallModal__portal"
      contentLabel="Data upload modal"
      ariaHideApp={false}
    >
      <button
        className="PayPallModal__close-button"
        onClick={props.onClose}
      >
        X
      </button>

      <div className="PayPallModal__body">
        <h4>Dear user</h4>
        <br />

        <p>It looks that you find <b>datamaps.co</b> interesting.</p>
        <p>If this app helped you with your work, please consider small donation.</p>
        <p>Thanks!</p>
        <br />
        <br />

        <div style={{ marginLeft: -15 }}>
          <PayPalDonateButton />
        </div>
      </div>

      <style jsx global>{`
        .PayPallModal {
          margin: 0 auto;
          margin-top: 60px;
          max-width: 650px;
          padding-bottom: 20px;
          background-color: white;
          padding: 25px;
          border-radius: 4px;
        }

        .PayPallModal:focus {
          outline: none;
        }

        .PayPallModal__overlay {
          position: fixed;
          overflow-x: scroll;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(66, 66, 66, 0.7);
        }

        .PayPallModal__portal {
          position: relative;
          z-index: ${paypallModalZIndex};
        }

        .PayPallModal__close-button {
          float: right;
          margin: 10px;
          padding: 0 20px;
          font-size: 18px;
          font-weight: 300;
          color: ${grey500};
          border-color: ${grey500};
        }

        .PayPallModal__body {
          margin-top: 60px;
        }
      `}</style>
    </Modal>
  )
}

export default PayPallModal
