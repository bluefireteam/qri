import React from "react";
import "./styles.css";

// TODO dismiss the messages
export default ({ errorMessages }) => (
  <div className="message-board">
    <ul>
      {
        errorMessages.map((error, idx) => (
          <li className="error" key={`ErrorMessage-${idx}`}>{ error }</li>
        ))
      }
    </ul>
  </div>
)
