import React from "react"
import { FileIcon, FolderIcon, SaveIcon, RunIcon } from "../Icons"

import "./styles.css";

export default ({
  editorsLength,
  selectedEditor,

  onRun
}) => (
  <div className="toolbar panel">
    <FileIcon />
    <FolderIcon />
    <RunIcon onClick={onRun} />
    {(() => {
      if (selectedEditor) {
        return <SaveIcon />
      }
    })() }
  </div>
)
