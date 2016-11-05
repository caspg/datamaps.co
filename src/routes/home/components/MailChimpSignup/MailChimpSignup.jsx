import React, { Component } from 'react'

class MailChimpSignup extends Component {
  componentDidMount() {
    (function($) {
      window.fnames = []
      window.ftypes = []
      window.fnames[0] = 'EMAIL'
      window.ftypes[0] = 'email'
      window.fnames[1] = 'FNAME'
      window.ftypes[1] = 'text'
    }(window.jQuery))

    const $mcj = window.jQuery.noConflict(true)
  }

  render() {
    return (
      /* eslint-disable max-len */
      <div style={{ textAlign: 'center' }}>

        <div id="mc_embed_signup">
          <form action="//datamaps.us14.list-manage.com/subscribe/post?u=a0f03e010de6c97e1c6da625e&amp;id=f68ea09ddb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">

              <div className="mc-field-group">
                <input type="email" placeholder="Your email" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>

              <div className="mc-field-group">
                <input type="text" placeholder="First name" name="FNAME" className="required" id="mce-FNAME" />
              </div>

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                <div className="response" id="mce-success-response" style={{ display: 'none' }} />
              </div>

                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_a0f03e010de6c97e1c6da625e_f68ea09ddb" tabIndex="-1" value="" />
                </div>

                <div className="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                </div>
              </div>
          </form>
        </div>

        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
      </div>
      /* eslint-enable */
    )
  }
}

export default MailChimpSignup
