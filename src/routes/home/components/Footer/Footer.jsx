import React from 'react'
import style from './Footer.css'

const Footer = () =>
  <footer className={style.footer}>
    <div className="row center-xs middle-xs">
      <div className="col-xs-12">
        <span className={style.text}>
          © Datamaps.co
        </span>
      </div>
    </div>
    <div className="row center-xs">
      <div className={style['small-text']}>
        <i>
        Icons made by <a style={{ color: 'inherit' }} href="http://www.freepik.com" title="Freepik">Freepik</a>
        </i>
      </div>
    </div>
  </footer>

export default Footer
