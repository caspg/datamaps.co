import React from 'react'
import style from './Footer.css'

const Footer = (props) =>
  <footer className={style.footer}>
    <div className="row center-xs middle-xs">
      <div className="col-xs-12">
        <span className={style.text}>
          2016 © Datamaps.co
        </span>
      </div>
    </div>
    <div className="row center-xs">
      <div className={style['small-text']}>
        {props.children}

      </div>
    </div>
  </footer>

export default Footer
