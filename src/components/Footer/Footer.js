import React, { PropTypes } from 'react'
import Link from 'next/link'

import routes from '@src/config/routes'
import { grey600, greyDark } from '@src/styles/colors';

const FooterLink = (props) =>
  <span className="FooterLink">
    <Link href={props.href}>
      <a className="FooterLink__link">
        {props.text}
      </a>
    </Link>

    <style jsx>{`
      .FooterLink {
        margin-bottom: 10px;
      }

      .FooterLink__link {
        color: ${grey600};
        margin: 0 10px;
        margin-bottom: 10px;
      }

      .FooterLink__link:hover {
        color: ${greyDark};
      }
    `}</style>
  </span>

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const Footer = (props) =>
  <footer className="Footer">
    <div className="row">
      <div className="col-xs-12">
        <div className="row center-xs middle-xs">

          <FooterLink href={routes.root} text="Home" />
          {'|'}
          <FooterLink href={routes.editor} text="Editor" />
          {'|'}
          <FooterLink href={routes.contact} text="Contact" />
          {'|'}
          <FooterLink href={routes.showcase} text="Showcase" />

        </div>
        <div className="row center-xs middle-xs">
          <span className="Footer__text">
            2016-2017 © Datamaps.co
          </span>

        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className="Footer__small-text">
        {props.children}
      </div>
    </div>

    <style jsx>{`
      .Footer {
        margin-top: 50px;
        margin-bottom: 30px;
        width: 100%;
        min-height: 70px;
        background-color: white;
        color: ${grey600};
      }

      .Footer__text {
        color: ${grey600};
      }

      .Footer__small-text {
        font-size: 10px;
        margin-top: 10px;
        padding-right: 0;
        color: ${grey600};
      }
    `}</style>
  </footer>

Footer.propTypes = {
  children: PropTypes.element,
}

export default Footer
