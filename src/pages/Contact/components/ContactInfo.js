import React from 'react';

function ContactInfo() {
  return (
    <div className="ContactInfo">
      <p>
        Send me a message if you have any problems, found a bug or have a feature suggestion.
      </p>

      <br />

      <p>
        Also, tell me which map would like to see next.
      </p>

      <br />

      <h5>All feedback is welcome!</h5>

      <style jsx>{`
        .ContactInfo {
          margin-top: 70px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
}

export default ContactInfo;
