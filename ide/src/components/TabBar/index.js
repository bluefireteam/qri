import React from "react"

import "./styles.css";

export default ({
  tabs,
  selectedEditor,
  onSelect,
  onClose,
}) => (
  <div className="tab-bar-container">
    <ul>
      {
        tabs.map(tab => (
          <li
            key={`Tab-${tab.fileName}`}
            className={tab.fileName === selectedEditor ? "selected" : ""}
          >
            <span onClick={() => onSelect(tab)} className="tab-name-label">{ tab.fileName }</span>
            <span onClick={() => onClose(tab)} className="close-tab">X</span>
          </li>
        ))
      }
    </ul>
  </div>
)
