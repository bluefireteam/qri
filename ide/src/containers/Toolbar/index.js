import { connect } from "react-redux";
import { runGame, generateQr } from "../../actions/game";
import { saveSelectedFile, saveAllFiles, createScript } from "../../actions/fs";
import Toolbar from "../../components/Toolbar";

const mapStateToProps = ({
  workspace: { editors },
  project: { qrData },
}) => ({
  editorsLength: editors.length,
  selectedEditor: editors.find(e => e.selected),
  qrData,
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
  },
  onGenerateQr: () => {
    dispatch(generateQr());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


