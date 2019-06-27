import { connect } from "react-redux";
import SideBar from "../../components/SideBar";

import { readScript, deleteScript } from "../../actions/fs";

const mapStateToProps = ({ scripts: { files } }) => ({ scripts: files });

const mapDispatchToProps = dispatch => ({
  onSelectResource: (type, resource) => {
    if (type === "SCRIPT") {
      dispatch(readScript(resource.fileName)).then(() => {
        dispatch({
          type: "OPEN_EDITOR",
          payload: {
            fileName: resource.fileName,
            type: "SCRIPT",
          },
        })
      });
    }
  },
  onDeleteScript: fileName => {
    dispatch(deleteScript(fileName));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

