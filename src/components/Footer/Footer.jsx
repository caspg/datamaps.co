import React from 'react'
import style from './Footer.css'

const Footer = (props) =>
  <footer className={style.footer}>
    <div className="row">
      <div className="col-xs-12">
        <div className="row center-xs middle-xs">
          <span className={style.text}>
            2016 © Datamaps.co
          </span>
          <a href="https://twitter.com/datamapsco" className={style.imagelink}>
            <img className={style.twittericon} src="/images/icons/twitter-64.png" alt="twitter icon" />
          </a>
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className={style['small-text']}>
        {props.children}

      </div>
    </div>
  </footer>

export default Footer
