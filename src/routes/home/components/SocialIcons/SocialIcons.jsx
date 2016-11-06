import React from 'react'

import style from './SocialIcons.css'

const TwitterIcon = () =>
  <a href="https://twitter.com/datamapsco">
    <img className={style.twittericon} src="/images/icons/twitter-64.png" alt="twitter icon" />
  </a>

const SocialIcons = () =>
  <div className={style.container}>
    <div className="row middle-xs center-xs">
      <TwitterIcon />
    </div>
  </div>

export default SocialIcons
