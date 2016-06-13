import React, { Component } from 'react'
import axios from 'axios'

import style from './ContactForm.css'
import config from 'config'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = {
      errors: [],
      succesMsg: '',
      isSending: false,
    }
  }

  sendForm() {
    const { message, email } = this.refs
    const url = `https://formspree.io/${config.contactEmail}`

    // if (process.env.NODE_ENV !== 'production') {
    //   message.value = ''
    //   email.value = ''
    //   this.setState({ succesMsg: 'Message was successfully sent!', isSending: false })
    //   return
    // }

    axios.post(url, {
      message: message.value,
      email: email.value,
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({ succesMsg: 'Message was successfully sent!', isSending: false })
        message.value = ''
        email.value = ''
      } else {
        this.setState({
          errors: ['There was some problem. Please try again later.'],
          isSending: false,
        })
      }
    })
    .catch((response) =>
      this.setState({
        errors: [response],
        isSending: false,
      })
    )
  }

  validateForm() {
    const { message, email } = this.refs
    const errors = []

    if (message.value === '') {
      errors.push('Message body can\'t be blank')
    }

    if (!!email.value && !/@/.test(email.value)) {
      errors.push('Email is missing an @')
    }

    this.setState({ errors })

    return errors.length === 0
  }

  handleFormSubmit(e) {
    this.setState({
      errors: [],
      succesMsg: '',
    })

    if (this.refs._bazzinga.value === '') {
      /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
      if (this.validateForm()) {
        this.setState({ isSending: true })
        this.sendForm()
      }
    }

    e.target.blur()
  }

  renderErrors() {
    const errors = this.state.errors.map((error, index) =>
      <li key={index}>{error}</li>
    )

    if (errors.length > 0) {
      return (
        <ul className={style.errors}>
          {errors}
        </ul>
      )
    }

    return ''
  }

  renderSuccessMsg() {
    if (!!this.state.succesMsg) {
      return (
        <div className={style.succesMsg}>
          <p>{this.state.succesMsg}</p>
        </div>
      )
    }

    return ''
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.loader} />
        {this.renderErrors()}
        {this.renderSuccessMsg()}

        <div>
          <label htmlFor="message">Message:</label>
          <textarea ref="message" id="message" className={style.textarea} type="text" required placeholder="message" />

          <input type="text" ref="_bazzinga" style={{ display: 'none' }} />

          <label htmlFor="contact-email">Your contact email:</label>
          <input ref="email" id="contact-email" className={style.input} type="text" type="email" placeholder="email" name="_replyto" />

          <button
            className="button-primary"
            onClick={this.handleFormSubmit}
            disabled={this.state.isSending}
          >
            Send
          </button>
        </div>
      </div>
    )
  }
}
