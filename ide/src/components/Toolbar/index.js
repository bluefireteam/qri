import React from "react"
import DialogBox from "../DialogBox"
import { FileIcon, FolderIcon, SaveIcon, RunIcon } from "../Icons"

import "./styles.css";

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFileDialogOpen: false,
      newScriptName: "",
    }
  }

  render() {
    const {
      editorsLength, selectedEditor,

      onSave,
      onSaveAll,
      onRun,
      onCreate
    }  = this.props;

    return (
      <div className="toolbar panel">
        <FileIcon onClick={() => {
          this.setState({
            newScriptName: "",
            newFileDialogOpen: true
          })
        }}/>
        <FolderIcon />
        <RunIcon onClick={onRun} />
        {(() => {
          if (selectedEditor) {
            return <SaveIcon onClick={onSave} />
          }
        })()}
        {(() => {
          if (editorsLength > 1) {
            return (
              <span className="save-all" onClick={onSaveAll}>
                <SaveIcon />
                <SaveIcon />
              </span>
            )
          }
        })()}
        {
          this.state.newFileDialogOpen && (
            <DialogBox>
              <h2>New script</h2>
              <input
                type="text"
                value={this.state.newScriptName}
                onChange={event => { 
                  this.setState({newScriptName: event.target.value});
                }}
              />
              <div>
                <input
                  type="button"
                  value="Create"
                  disabled={this.state.newScriptName.length === 0}
                  onClick={() => {
                    onCreate(this.state.newScriptName);
                    this.setState({ newFileDialogOpen: false })
                  }}
                />
                <input
                  type="button"
                  value="Cancel"
                  onClick={() => {
                    this.setState({ newFileDialogOpen: false })
                  }}
                />
              </div>
            </DialogBox>
          )
        }
      </div>
    )
  }
}
