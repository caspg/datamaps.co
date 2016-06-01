import React from 'react'

import metaTags from 'config/meta'
import Navbar from 'components/Navbar/Navbar'
import ContactForm from '../ContactForm/ContactForm'
import ContactInfo from '../ContactInfo/ContactInfo'
import Footer from 'components/Footer/Footer'

import style from './ContactView.css'

const ContactView = () => {
  document.title = metaTags.titles.contact

  return (
    <div>
      <div className={style.header}>
        <Navbar textColor="white" />
      </div>

      <div className={style['contact-wrapper']}>
        <div className="row">
          <div className="col-sm-offset-2"></div>
          <div className="col-xs-10 col-sm-4">
            <ContactInfo />
          </div>

          <div className="col-xs-10 col-sm-4">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactView
