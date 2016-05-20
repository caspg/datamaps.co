import React, { Component } from 'react'

import style from './ContactForm.css'

export default class ContactForm extends Component {
  render() {
    return (
      <div className={style.container}>
        <form action="https://formspree.io/your@email.com" method="POST">

          <label htmlFor="message">Message:</label>
          <textarea id="message" className={style.textarea} type="text" name="message" required />

          <label htmlFor="contact-email">Your contact email:</label>
          <input id="contact-email" className={style.input} type="text" type="email" />

          <input className="button-primary" type="submit" value="Send" />
        </form>
      </div>
    )
  }
}
