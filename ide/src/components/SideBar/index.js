import React from "react";

export default ({ scripts }) => (
  <div>
    <ul className="side-bar-item-list">
      {
        scripts.map(({ fileName }) => (
          <li key={`Script-${fileName}`}>{ fileName }</li>
        ))
      }
    </ul>
  </div>
)
