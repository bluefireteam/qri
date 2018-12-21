import React from "react"
import { FileIcon, FolderIcon, SaveIcon } from "../Icons"

import "./styles.css";

export default ({
  editorsLength,
  selectedEditor,
}) => (
  <div className="toolbar panel">
    <FileIcon />
    <FolderIcon />
    {(() => {
      if (selectedEditor) {
        return <SaveIcon />
      }
    })() }
  </div>
)
