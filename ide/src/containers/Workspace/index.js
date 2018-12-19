import { connect } from "react-redux";
import Workspace from "../../components/Workspace";

const findEditorContent = (editor, scripts, sprites) => {
  if (editor.type = "SCRIPT") {
    return (scripts.find(script => script.fileName === editor.fileName) || {}).content
  }

  return null;
}

const mapStateToProps = ({ workspace: { editors }, scripts, sprites }) => ({
  editors: editors.map(editor => ({
    fileName: editor.fileName,
    content: findEditorContent(editor, scripts, sprites)
  }))
});

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
