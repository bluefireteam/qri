import React from "react";
import { connect } from "react-redux";
import WelcomePanel from "../WelcomPanel";
import MessageBoard from "../MessageBoard";
import SideBar from "../SideBar";

const mapStateToProps = ({ project: { name, projectPath } }) => ({
  name,
  projectPath,
})

const IDEPanel = ({ }) => (
  <div className="editor full-size">
    <div className="toolbar panel">
      toolbar
    </div>
    <div className="main-panel">
      <div className="side-panel panel">
        <SideBar />
      </div>
      <div className="editor-panel panel">
        editor-panel
      </div>
    </div>
  </div>
)

const IDE = ({ name, projectPath }) => (
  <div className="full-size">
    <MessageBoard />
    {
      name
        ? <IDEPanel />
        : <WelcomePanel />
    }
  </div>
)

export default connect(mapStateToProps)(IDE);
