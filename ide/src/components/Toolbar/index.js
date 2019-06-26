import React from "react"
import { FileIcon, FolderIcon, SaveIcon, RunIcon } from "../Icons"

import "./styles.css";

export default ({
  editorsLength,
  selectedEditor,

  onSave,
  onRun
}) => (
  <div className="toolbar panel">
    <FileIcon />
    <FolderIcon />
    <RunIcon onClick={onRun} />
    {(() => {
      if (selectedEditor) {
        return <SaveIcon onClick={onSave} />
      }
    })() }
  </div>
)
