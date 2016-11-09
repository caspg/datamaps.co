import React, { Component } from 'react'
import Modal from 'react-modal'

import style from './MailChimpPopup.css'

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
          <h1>ELo</h1>
        </Modal>
      </div>
    )
  }
}

export default MailChimpPopup
