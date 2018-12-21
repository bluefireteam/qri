import React from "react";
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/javascript";
import "brace/theme/monokai";

import "./styles.css";

export default ({ fileName, value }) => (
  <div className="script-editor-container full-size">
    <AceEditor
      mode="javascript"
      theme="monokai"
      value={value}
      width="100%"
      height="100%"
      onChange={value => {
        console.log(value)
	  	}}
      name={`AceEditor-${fileName}`}
      editorProps={{}}
    />
  </div>
)
