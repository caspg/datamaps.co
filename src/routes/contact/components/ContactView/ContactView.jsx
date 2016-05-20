import React from 'react'

import Navbar from 'components/Navbar/Navbar'
import ContactForm from '../ContactForm/ContactForm'

import style from './ContactView.css'

const ContactView = () =>
  <div>
    <div className={style.header}>
      <Navbar textColor="white" />
    </div>

    <div className="row">
      <div className="col-sm-offset-2"></div>
      <div className="col-xs-10 col-sm-4">

      </div>

      <div className="col-xs-10 col-sm-4">
        <ContactForm />
      </div>
    </div>
  </div>

export default ContactView
