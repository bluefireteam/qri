import { connect } from "react-redux";
import { runGame } from "../../actions/game";
import { saveFile } from "../../actions/fs";
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
    dispatch(saveFile());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


