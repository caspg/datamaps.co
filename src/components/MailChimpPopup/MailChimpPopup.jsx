import React, { Component } from 'react'
import Modal from 'react-modal'

import style from './MailChimpPopup.css'
import MailChimpSignup from 'components/MailChimpSignup'

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
          className={style.button}
          onClick={this.handleOnClick}
        >
          Join the beta list
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className={style['modal-container']}
          overlayClassName={style.overlay}
        >
          <div>
            <div className="row end-xs">
              <button
                className={style.closebutton}
                onClick={this.closeModal}
              >
                X
              </button>
            </div>
            <h4 className={style['modal-header']}>
              Subscribe to receive early access invite to the new platform
            </h4>
            <MailChimpSignup />
          </div>
        </Modal>
      </div>
    )
  }
}

export default MailChimpPopup
