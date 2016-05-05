import React from 'react'

import style from './Header.css'
import Navbar from 'components/Navbar/Navbar'

const Header = () =>
  <div>
    <div className={style['navbar-wrapper']}>
      <Navbar textColor="grey" />
    </div>
  </div>

export default Header
