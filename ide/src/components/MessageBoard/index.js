import React from "react";
import "./styles.css";

// TODO dismiss the messages
export default ({ errorMessages, infoMessages }) => (
  <div className="message-board">
    <ul>
      {
        errorMessages.map((error, idx) => (
          <li className="error" key={`ErrorMessage-${idx}`}>{ error }</li>
        ))
      }
      {
        infoMessages.map((info, idx) => (
          <li className="info" key={`InfoMessage-${idx}`}>{ info }</li>
        ))
      }
    </ul>
  </div>
)
