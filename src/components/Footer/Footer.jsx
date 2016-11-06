import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import routes from 'config/routes'
import style from './Footer.css'

const FooterLink = (props) =>
  <Link className={style.textlink} to={props.to}>
    {props.text}
  </Link>

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const Footer = (props) =>
  <footer className={style.footer}>
    <div className="row">
      <div className="col-xs-12">
        <div className="row center-xs middle-xs">

          <FooterLink to={routes.root} text="Home" />
          {'|'}
          <FooterLink to={routes.editor} text="Editor" />
          {'|'}
          <FooterLink to={routes.contact} text="Contact" />
          {'|'}
          <FooterLink to={routes.showcase} text="Showcase" />

        </div>
        <div className="row center-xs middle-xs">
          <span className={style.text}>
            2016 © Datamaps.co
          </span>

        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className={style['small-text']}>
        {props.children}
      </div>
    </div>
  </footer>

Footer.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Footer
