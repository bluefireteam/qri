import { connect } from "react-redux";
import { runGame } from "../../actions/game";
import { saveSelectedFile, saveAllFiles, createScript } from "../../actions/fs";
import Toolbar from "../../components/Toolbar";

const mapStateToProps = ({
  workspace: { editors },
}) => ({
  editorsLength: editors.length,
  selectedEditor: editors.find(e => e.selected),
});

const mapDispatchToProps = dispatch => ({
  onRun: () => {
    dispatch(runGame())
  },
  onSave: () => {
    dispatch(saveSelectedFile());
  },
  onSaveAll: () => {
    dispatch(saveAllFiles());
  },
  onCreate: scriptName => {
    dispatch(createScript(scriptName));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


