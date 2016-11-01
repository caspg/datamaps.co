import React from 'react'
import { Link } from 'react-router'

import routes from 'config/routes'
import style from './Navbar.css'

const Navbar = () => (
  <nav className={`row middle-xs + ${style.nav}`}>
    <div className="col-sm-6 col-xs-12">
      <Link to={routes.root} className={style['link-logo']}>
        <div className="row middle-xs">
          <img className={style['logo-image']} src="/images/logo.png" />
          <h4 className={style['logo-text']}>
            Datamaps.co
          </h4>
        </div>
      </Link>
    </div>

    <div className="col-sm-6 col-xs-12 end-sm start-xs">
      <ul className={style['unordered-list']}>
        <li className={style['list-item']}>
          <Link to={routes.editor} className={style.link}>Editor</Link>
        </li>
        <li className={style['list-item']}>
          <Link to={routes.contact} className={style.link}>Contact</Link>
        </li>
        <li className={style['list-item']}>
          <Link to={routes.showcase} className={style.link}>Showcase</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
