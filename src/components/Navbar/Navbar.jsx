import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import routes from 'config/routes'
import style from './Navbar.css'

const renderLinnks = () => {
  const links = [
    { to: routes.root, text: 'Home' },
    { to: routes.editor, text: 'Editor' },
    { to: routes.contact, text: 'Contact' },
    { to: routes.showcase, text: 'Showcase' },
  ]

  return links.map((link, i) =>
    <li key={i} className={style['list-item']}>
      <Link to={link.to} className={style.link}>{link.text}</Link>
    </li>
  )
}

const Navbar = props => (
  <nav className={`row middle-xs ${style.nav} ${style[props.className]}`}>
    <div className="col-xs-6">
      <div className="row middle-xs">

        <Link to={routes.root} className={style['link-logo']}>
          <img className={style['logo-image']} src="/images/logo.png" />
        </Link>

        <Link to={routes.root} className={style['link-logo']}>
          <h4 className={style['logo-text']}>
            Datamaps.co
          </h4>
        </Link>
      </div>
    </div>

    <div className="col-xs-6 show-xs">
      <div className="row middle-xs end-xs">
        {props.children}
      </div>
    </div>

    <div className="col-sm-6 end-sm start-xs hide-xs">
      <ul className={style['unordered-list']}>
        {renderLinnks()}
      </ul>
    </div>
  </nav>
)

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
}

export default Navbar
