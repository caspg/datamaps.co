import React from 'react'

const TwitterIcon = () =>
  <a href="https://twitter.com/datamapsco">
    <img
      className="SocialIcons__icon"
      src="/static/images/icons/twitter-64.png"
      alt="twitter icon"
    />
  </a>

const GithubIcon = () =>
  <a href="https://github.com/caspg/datamaps.co">
    <img
      className="SocialIcons__icon"
      src="/static/images/icons/github-64.png"
      alt="github icon"
    />
  </a>

const SocialIcons = () =>
  <div className="SocialIcons__container">
    <div className="row middle-xs center-xs">
      <TwitterIcon />
      <GithubIcon />
    </div>

    <style jsx>{`
      .SocialIcons__container {
        padding-top: 40px;
      }

      :global(.SocialIcons__icon) {
        margin-left: 15px;
        padding: 0 12px;
        height: 50px;

        opacity: 0.3;
        cursor: pointer;
      }

      :global(.SocialIcons__icon:hover) {
        opacity: 0.6;
      }
    `}</style>
  </div>

export default SocialIcons
