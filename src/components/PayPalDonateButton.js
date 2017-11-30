import React from 'react'

const PayPalDonateButton = () => (
  <div>
    <form
      className="PayPalDonateButton__form"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="DDTJDFY2RJWEG" />

      <input
        className="PayPalDonateButton__button"
        type="submit"
        value="Donate"
        name="submit"
        title="Datamaps.co dontation."
      />

      <img
        alt=""
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
        style={{ border: 0 }}
      />
    </form>

    <style jsx>{`
      .PayPalDonateButton__form {
        margin-top: 5px;
        margin-bottom: 0;
      }

      .PayPalDonateButton__button {
        margin-left: 15px;
        margin-bottom: 0;
        height: 30px !important;
        line-height: 30px !important;
        background-color: #FFB74D !important;
        border: none !important;
        color: white !important;
      }

      .PayPalDonateButton__button:hover {
        color: white;
        box-shadow: 1px 1px 2px 1px rgba(39, 39, 39, 0.4);
      }
    `}</style>
  </div>
)

export default PayPalDonateButton
