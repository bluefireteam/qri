import React from "react";

import ScriptEditor from "../ScriptEditor";
import TabBar from "../TabBar";

import "./styles.css";

export default ({ editors, selectedEditor, onTabSelect, onTabClose, onScriptChange }) => (
  <div className="full-size">
    {
      editors.length
        ? (
          <div className="editor-wrapper full-size">
            <TabBar
              tabs={editors}
              selectedEditor={selectedEditor.fileName} 
              onSelect={onTabSelect}
              onClose={onTabClose}
            />
            <ScriptEditor
              fileName={selectedEditor.fileName}
              value={selectedEditor.content}
              onChange={value => onScriptChange(selectedEditor, value)}
            />
          </div>
        )
        : (<span> Nothing opened yet, use the side bar on the left to open resources. </span>)
    }
  </div>
)
