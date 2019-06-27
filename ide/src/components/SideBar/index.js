import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import DialogBox from "../DialogBox";

import "./styles.css"

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      scriptToDelete: null,
    }
  }

  render() {
    const { scripts, onSelectResource, onDeleteScript } = this.props;

    return (
      <div className="side-bar-panel">
        <div>
          <h2> Scripts </h2>
          <ul className="side-bar-item-list">
            {
              scripts.map(script => (
                <li key={`Script-${script.fileName}`}>
                  <span onClick={() => onSelectResource("SCRIPT", script)} className="item-name">
                    <FontAwesomeIcon icon={["fab", "js"]} /> { script.fileName }
                  </span>

                  <span className="delete-item" onClick={e => {
                    this.setState({ scriptToDelete: script.fileName });
                    e.preventDefault();
                  }}>
                  <FontAwesomeIcon icon="times" />
                </span>
              </li>
              ))
            }
          </ul>
        </div>

        { this.state.scriptToDelete && (
          <DialogBox>
            <h2>Are you sure you want to delete "{this.state.scriptToDelete}"</h2>
            <div>
              <input type="button" value="No" onClick={() => this.setState({ scriptToDelete: null }) } />
              <input type="button" value="Yes" onClick={() => {
                this.setState({ scriptToDelete: null });
                onDeleteScript(this.state.scriptToDelete);
              }}/>
            </div>
          </DialogBox>
        )}
      </div>
    )
  }
}
