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
          <li
            key={`Tab-${tab.fileName}`}
            className={tab.fileName === selected ? "selected" : ""}
            onClick={() => onSelect(tab)}
          >
            { tab.fileName }
          </li>
        ))
      }
    </ul>
  </div>
)
