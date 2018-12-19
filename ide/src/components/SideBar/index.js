import React from "react";

import "./styles.css"

export default ({ scripts, onSelectResource }) => (
  <div>
    <div>
      <h2> Scripts </h2>
      <ul className="side-bar-item-list">
        {
          scripts.map(script => (
            <li key={`Script-${script.fileName}`} onClick={() => onSelectResource("SCRIPT", script)}>
              { script.fileName }
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)
