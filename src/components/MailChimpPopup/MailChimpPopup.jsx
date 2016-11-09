import React, { Component } from 'react'

import style from './MailChimpPopup.css'

class MailChimpPopup extends Component {
  render() {
    return (
      <div>
        <button className={style.button}>
          Join the beta list
        </button>
      </div>
    )
  }
}

export default MailChimpPopup
