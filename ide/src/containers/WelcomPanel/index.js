import { connect } from "react-redux";
import WelcomePanel from "../../components/WelcomePanel";

import { readProject } from "../../actions/fs";
import { showErrorMessage } from "../../actions/messages";
const { remote: { dialog } } = window.require("electron");

const mapDispatchToProps = dispatch => ({
  onChooseProject: () => {
      dialog.showOpenDialog(null, { property: ["openFile"]}, ([file]) => {
        if (file) {
          if (file.endsWith("qri.json")) {
            dispatch(readProject(file));
          } else {
            dispatch(showErrorMessage("Invalid qri.json file"));
          }
        }
      });
    }
})

export default connect(undefined, mapDispatchToProps)(WelcomePanel);
