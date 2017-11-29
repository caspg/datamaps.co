import React, { PropTypes } from 'react'
import Link from 'next/link'

import routes from '@src/config/routes'
import { grey100, greyDark } from '@src/styles/colors';

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
}

function Navbar(props) {
  const renderLinnks = () => {
    const links = [
      { to: routes.editor, text: 'Editor' },
      { to: routes.contact, text: 'Contact' },
      { to: routes.showcase, text: 'Showcase' },
    ]

    return links.map((link, i) =>
      <li key={i} className="list-item">
        <Link href={link.to}>
          <a className="link">
            {link.text}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <nav className={`row middle-xs nav ${props.className}`}>
      <div className="col-xs-6">
        <div className="row middle-xs">

          <Link href={routes.root}>
            <a className="link" style={{ padding: 0 }}>
              <img className="logo-image" src="/static/images/logo.png" />
            </a>
          </Link>

          <Link href={routes.root}>
            <a className="link" style={{ padding: 0 }}>
              <h4 className="logo-text">
                Datamaps.co
              </h4>
            </a>
          </Link>
        </div>
      </div>

      <div className="col-xs-6 show-sm">
        <div className="row middle-xs end-xs">
          {props.children}
        </div>
      </div>

      <div className="col-sm-6 end-sm start-xs hide-sm">
        <ul className="unordered-list">
          {renderLinnks()}
        </ul>
      </div>

      <style jsx>{`
        .nav {
          min-height: 60px;
          padding: 0 40px 0 40px;
          background-color: ${grey100};
          position: relative;
        }

        .unordered-list {
          list-style-type: none;
          margin: 0;
          padding: 0;
          padding-bottom: 15px;
          margin-left: 20px;
        }

        :global(.list-item) {
          display: inline-block;
          margin-bottom: 0;
        }

        :global(.link) {
          padding: 10px;
          border-radius: 5px;
          text-decoration: none;
          color: ${greyDark};
        }

        :global(.link:hover) {
          color: ${greyDark};
        }

        .logo-image {
          width: 30px;
          height: 30px;
          margin-right: 5px;
        }

        .logo-text {
          padding: 10px 0;
        }

        @media only screen and (min-width: 48em) {
          .unordered-list {
            padding-bottom: 0;
          }
        }
      `}</style>
    </nav>

  )
}

export default Navbar
