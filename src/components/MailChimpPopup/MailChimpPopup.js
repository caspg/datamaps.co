import React, { Component } from 'react'
import Modal from 'react-modal'

import MailChimpSignup from '@src/components/MailChimpSignup'

import { mailchimpPopupZIndex } from '@src/styles/variables'
import { grey100, grey500 } from '@src/styles/colors'

class MailChimpPopup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  handleOnClick() {
    this.setState({ modalIsOpen: true })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <button
          className="MailChimpPopup__button"
          onClick={this.handleOnClick}
        >
          Join the beta list
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="MailChimpPopup__modal-container"
          portalClassName="MailChimpPopup__portal"
        >
          <div>
            <div className="row end-xs">
              <button
                className="MailChimpPopup__close-button"
                onClick={this.closeModal}
              >
                X
              </button>
            </div>
            <h4 className="MailChimpPopup__header">
              Subscribe to receive early access invite to the new platform
            </h4>
            <MailChimpSignup />
          </div>
        </Modal>

        <style jsx global>{`
          .MailChimpPopup__portal {
            position: relative;
            z-index: ${mailchimpPopupZIndex};
          }

          .MailChimpPopup__modal-container {
            padding: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${grey100};
            border: 1px solid ${grey500};
            width: 80%;
            text-align: center;
          }

          .MailChimpPopup__modal-container:focus {
            outline: none;
          }

          @media only screen and (min-width: 48em) {
            .MailChimpPopup__modal-container {
              width: 50%;
              max-width: 750px;
            }
          }
        `}</style>

        <style jsx>{`
          .MailChimpPopup__button {
            margin-top: 5px;
            margin-bottom: 0;
            height: 30px;
            line-height: 30px;
            background-color: #03A9F4;
            color: white;
            border: none;
          }

          .MailChimpPopup__button:hover {
            color: white;
            box-shadow: 1px 1px 2px 1px rgba(39, 39, 39, 0.4);
          }

          .MailChimpPopup__button:focus {
            color: white;
          }

          .MailChimpPopup__close-button {
            padding: 0 20px;
            font-size: 18px;
            font-weight: 300;
            color: ${grey500};
            border-color: ${grey500};
          }

          .MailChimpPopup__header {
            margin-top: 20px;
            margin-bottom: 40px;
          }
        `}</style>
      </div>
    )
  }
}

export default MailChimpPopup
