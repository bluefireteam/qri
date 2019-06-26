import React from "react"

import "./style.css"

export default ({ children }) => (
  <div className="dialog-box-background">
    <div className="dialog-box panel">
      { children }
    </div>
  </div>
)
