import React, { Component } from 'react'
import axios from 'axios'

import config from '@src/config'

import * as colors from '@src/styles/colors';

class ContactForm extends Component {
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

    axios.post(url, {
      message: message.value,
      email: email.value,
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          succesMsg: 'Message was successfully sent!',
          isSending: false,
        })

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
        <div>
          <ul className="ContactForm__errors">
            {errors}
          </ul>

          <style jsx>{`
            .ContactForm__errors {
              padding: 20px;
              margin-bottom: 20px;
              background: ${colors.red50};
              border: 1px solid ${colors.red300};
              color: ${colors.red900};
            }
          `}</style>
        </div>
      )
    }

    return ''
  }

  renderSuccessMsg() {
    if (!!this.state.succesMsg) {
      return (
        <div className="ContactForm__success-msg">
          <p>{this.state.succesMsg}</p>

          <style jsx>{`
            .ContactForm__success-msg {
              padding: 20px;
              margin-bottom: 20px;
              background-color: ${colors.lightGreen50};
              border: 1px solid ${colors.lightGreen400};
              color: ${colors.lightGreen900};
            }
          `}</style>
        </div>
      )
    }

    return ''
  }

  render() {
    return (
      <div className="ContactForm__container">
        {this.renderErrors()}
        {this.renderSuccessMsg()}

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            ref="message"
            id="message"
            className="ContactForm__textarea"
            type="text"
            required
            placeholder="message"
          />

          <input type="text" ref="_bazzinga" style={{ display: 'none' }} />

          <label htmlFor="contact-email">Your contact email:</label>
          <input
            ref="email"
            id="contact-email"
            className="ContactForm__input"
            type="text"
            type="email"
            placeholder="email"
            name="_replyto"
          />

          <button
            className="button-primary"
            onClick={this.handleFormSubmit}
            disabled={this.state.isSending}
          >
            Send
          </button>
        </div>

        <style jsx>{`
          .ContactForm__container {
            text-align: left;
            margin-top: 70px;
          }

          .ContactForm__textarea {
            height: 200px;
            width: 100%;
            max-width: 350px;
            min-width: 200px;
          }

          .ContactForm__input {
            display: block;
            width: 100%;
            max-width: 350px;
            min-width: 200px;
          }
        `}</style>
      </div>
    )
  }
}

export default ContactForm;
