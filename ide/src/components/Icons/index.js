import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./styles.css";

const IconBase = ({ icon, onClick, active = true }) => (
  <span className={`system-icon ${!active ? "disabled" : "" }`} onClick={onClick} >
    <FontAwesomeIcon icon={icon} />
  </span>
)

export const FileIcon = ({ ...props }) => <IconBase {...props} icon="file" />
export const FolderIcon = ({ ...props }) => <IconBase {...props} icon="folder" />
export const SaveIcon = ({ ...props }) => <IconBase {...props} icon="save" />
export const RunIcon = ({ ...props }) => <IconBase {...props} icon="play" />
