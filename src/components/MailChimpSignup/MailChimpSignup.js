/* eslint-disable max-len */
import React, { Component } from 'react'

import {
  seaBlue,
  grey500,
  red900,
  lightGreen50,
  lightGreen400,
  lightGreen900,
} from '@src/styles/colors'

const MAILCHIMP_FORM_ID = 'MAILCHIMP_FORM'

class MailChimpSignup extends Component {
  static removeScript() {
    const script = document.getElementById(MAILCHIMP_FORM_ID)

    if (!!script) {
      script.parentNode.removeChild(script)
    }
  }

  static createScript(src, callback) {
    const script = document.createElement('script')
    script.id = MAILCHIMP_FORM_ID
    script.type = 'text/javascript';
    script.src = src
    script.onload = callback

    document.body.appendChild(script)
  }

  static mailchimpMagic() {
    /* eslint-disable no-unused-vars */
    (($) => {
      window.fnames = []
      window.ftypes = []
      window.fnames[0] = 'EMAIL'
      window.ftypes[0] = 'email'
      window.fnames[1] = 'FNAME'
      window.ftypes[1] = 'text'
    })(window.jQuery)

    window.$mcj = window.jQuery.noConflict(true)
  }

  static loadValidationScripts() {
    /* eslint-disable no-unused-vars */
    const scriptsSrc = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'

    MailChimpSignup.removeScript()

    MailChimpSignup.createScript(scriptsSrc, () => {
      MailChimpSignup.mailchimpMagic()
    })
    /* eslint-enable */
  }

  static renderForm() {
    return (
      <div id="mc_embed_signup">
        <form action="//datamaps.us14.list-manage.com/subscribe/post?u=a0f03e010de6c97e1c6da625e&amp;id=f68ea09ddb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">

            <div className="mc-field-group">
              <input
                type="email"
                placeholder="Your email"
                name="EMAIL"
                id="mce-EMAIL"
                className="required email MailChimpSignup__input"
              />
            </div>

            <div className="mc-field-group">
              <input
                type="text"
                placeholder="First name"
                name="FNAME"
                id="mce-FNAME"
                className="required MailChimpSignup__input"
              />
            </div>

            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }} />
              <div className="response" id="mce-success-response" style={{ display: 'none' }} />
            </div>

              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_a0f03e010de6c97e1c6da625e_f68ea09ddb" tabIndex="-1" value="" />
              </div>

              <div>
                <input
                  type="submit"
                  value="Join the beta list"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="MailChimpSignup__submit-btn"
                />
              </div>
            </div>
        </form>
      </div>
    )
  }

  componentDidMount() {
    setTimeout(MailChimpSignup.loadValidationScripts, 800)
  }

  render() {
    return (
      <div className="MailChimpSignup">
        {MailChimpSignup.renderForm()}

        <style jsx global>{`
          .MailChimpSignup__input {
            width: 300px;
            border-color: ${grey500};
          }

          .MailChimpSignup__submit-btn {
            margin: 20px 0;
            background: ${seaBlue};
            color: white;
            border-radius: 4px;
            border-width: 0;
            width: 300px;
            box-shadow: 2px 6px 11px 2px rgba(39, 39, 39, 0.5);
          }
        `}</style>

        <style jsx global>{`
          .MailChimpSignup #mc_embed_signup .mce_inline_error {
            color: ${red900};
            background-color: transparent;
          }

          .MailChimpSignup #mc_embed_signup input.mce_inline_error {
            border-color: ${red900};
            background-color: white;
          }

          .MailChimpSignup #mce-success-response {
            padding: 5px;
            display: inline-block;
            color: ${lightGreen900};
            max-width: 350px;
            text-align: justify;
            background-color: ${lightGreen50};
            border: 1px solid ${lightGreen400};
          }
        `}</style>
      </div>
    )
  }
}

export default MailChimpSignup
/* eslint-enable */
