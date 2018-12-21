import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar";

const mapStateToProps = ({
  workspace: { editors },
}) => ({
  editorsLength: editors.length,
  selectedEditor: editors.find(e => e.selected),
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


