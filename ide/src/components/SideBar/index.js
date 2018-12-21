import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./styles.css"

export default ({ scripts, onSelectResource }) => (
  <div className="side-bar-panel">
    <div>
      <h2> Scripts </h2>
      <ul className="side-bar-item-list">
        {
          scripts.map(script => (
            <li key={`Script-${script.fileName}`} onClick={() => onSelectResource("SCRIPT", script)}>
              <FontAwesomeIcon icon={["fab", "js"]} /> { script.fileName }
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)
