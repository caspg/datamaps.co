import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import style from './Navbar.css'

const Navbar = (props) => {
  const color = props.textColor

  return (
    <nav className={`row middle-xs + ${style.nav}`}>
      <div className="col-xs-6">
        <h4>
          <Link to="/" className={style[`${color}-link`]}>Datamaps.co</Link>
        </h4>
      </div>
      <div className="col-xs-6 end-xs">
        <ul className={style['unordered-list']}>
          <li className={style['list-item']}>
            <Link to="/editor" className={style[`${color}-link`]}>Editor</Link>
          </li>
          <li className={style['list-item']}>
            <Link to="/" className={style[`${color}-link`]}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  textColor: PropTypes.string.isRequired,
}

export default Navbar
