import React from 'react'

import style from './SocialIcons.css'

const TwitterIcon = () =>
  <a href="https://twitter.com/datamapsco">
    <img className={style.icon} src="/images/icons/twitter-64.png" alt="twitter icon" />
  </a>

const GithubIcon = () =>
  <a href="https://github.com/caspg/datamaps.co">
    <img className={style.icon} src="/images/icons/github-64.png" alt="github icon" />
  </a>

const SocialIcons = () =>
  <div className={style.container}>
    <div className="row middle-xs center-xs">
      <TwitterIcon />
      <GithubIcon />
    </div>
  </div>

export default SocialIcons
