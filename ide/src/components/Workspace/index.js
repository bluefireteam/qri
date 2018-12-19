import React from "react";

import ScriptEditor from "../ScriptEditor";

import "./styles.css";

export default ({ editors }) => (
  <div className="full-size">
    {
      editors.length
        ? (<ScriptEditor fileName={editors[0].fileName} value={editors[0].content} />)
        : (<span> Nothing opened yet, use the side bar on the left to open resources. </span>)
    }
  </div>
)
