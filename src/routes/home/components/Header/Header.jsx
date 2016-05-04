import React, { PropTypes } from 'react'

import style from './Header.css'

const Header = (props) =>
  <header className={style.header}>
    {props.children}

    <div className={'row middle-xs center-xs ' + style['title-container']}>
      <h1 className={style.title}>
        Create and download data maps.
      </h1>
    </div>
  </header>

Header.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Header;
