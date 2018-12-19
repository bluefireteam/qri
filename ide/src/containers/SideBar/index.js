import { connect } from "react-redux";
import SideBar from "../../components/SideBar";

import { readScript } from "../../actions/fs";

const mapStateToProps = ({ scripts: { files } }) => ({ scripts: files });

const mapDispatchToProps = dispatch => ({
  onSelectResource: (type, resource) => {
    if (type === "SCRIPT") {
      dispatch(readScript(resource.fileName)).then(() => {
        dispatch({
          type: "NEW_EDITOR",
          payload: {
            fileName: resource.fileName,
            type: "SCRIPT",
          },
        })
      });
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

