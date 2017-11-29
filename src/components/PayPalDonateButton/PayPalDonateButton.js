import React from 'react'

import style from './PayPalDonateButton.css'

const PayPalDonateButton = () => (
  <form
    className={style.form}
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
    target="_blank"
  >
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="DDTJDFY2RJWEG" />

    <input
      className={style.button}
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
)

export default PayPalDonateButton
