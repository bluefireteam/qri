import React from "react";

import ScriptEditor from "../ScriptEditor";
import TabBar from "../TabBar";

import "./styles.css";

export default ({ editors, selectedEditor, onTabSelect }) => (
  <div className="full-size">
    {
      editors.length
        ? (
          <div>
            <TabBar
              tabs={editors}
              selectedEditor={selectedEditor.fileName} 
              onSelect={onTabSelect}
            />
            <ScriptEditor
              fileName={selectedEditor.fileName}
              value={selectedEditor.content}
            />
          </div>
        )
        : (<span> Nothing opened yet, use the side bar on the left to open resources. </span>)
    }
  </div>
)
