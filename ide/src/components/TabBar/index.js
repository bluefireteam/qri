import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
            <span onClick={() => onSelect(tab)} className="tab-name-label">
              { tab.fileName }
              { tab.modified && <span> * </span> }
            </span>
            <span onClick={() => onClose(tab)} className="close-tab">
              <FontAwesomeIcon icon="times" />
            </span>
          </li>
        ))
      }
    </ul>
  </div>
)
