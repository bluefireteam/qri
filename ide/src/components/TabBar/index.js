import React from "react"

import "./styles.css";

export default ({
  tabs,
  selected,
  onSelect,
  onClose,
}) => (
  <div className="tab-bar-container">
    <ul>
      {
        tabs.map(tab => (
          <li className={tab === selected ? "selected" : ""} key={`Tab-${tab}`}>{ tab }</li>
        ))
      }
    </ul>
  </div>
)
