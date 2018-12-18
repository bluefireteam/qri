import React from "react";
import { connect } from "react-redux";
import WelcomePanel from "../WelcomPanel";
import MessageBoard from "../MessageBoard";

const mapStateToProps = ({ project: { name, projectPath } }) => ({
  name,
  projectPath,
})

const IDE = ({ name, projectPath }) => (
  <div>
    <MessageBoard />
    {
      name
        ? <span>{ name }</span>
        : <WelcomePanel />
    }
  </div>
)

export default connect(mapStateToProps)(IDE);
