import React from 'react';

import metaTags from '@src/config/meta'
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import Navbar from '@src/components/Navbar'
import HamburgerMenu from '@src/components/HamburgerMenu'
import Footer from '@src/components/Footer'

import ContactForm from './components/ContactForm';

function Contact() {
  return (
    <div>
      <AppHead title={metaTags.titles.contact} />
      <GlobalStyles />

      <Navbar className="box-shadow">
        <HamburgerMenu />
      </Navbar>

      <div className="Contact__wrapper">
        <div className="row">
          <div className="col-sm-offset-2" />

          <div className="col-xs-10 col-sm-4">
            {/* <ContactInfo /> */}
          </div>

          <div className="col-xs-10 col-sm-4">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .Contact__wrapper {
          padding: 0 25px;
          margin-bottom: 90px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
