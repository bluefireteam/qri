const fs = window.require("fs");
const path = window.require("path");

export const readScript = scriptName => (dispatch, getState) => new Promise((resolve, reject) => {
  const { project: { projectPath } } = getState()

  const scriptPath = path.join(projectPath, "sources", scriptName);
  const fileContent = fs.readFileSync(scriptPath, "utf8");

  dispatch({
    type: "READ_SCRIPT_CONTENT",
    payload: { scriptName, fileContent }
  })

  resolve();
})

export const saveFile = () => (dispatch, getState) => {
  const { workspace, scripts, project: { projectPath } } = getState();

  const selectedEditor = workspace.editors.find(({ selected }) => selected);

  if (selectedEditor.type === "SCRIPT") {
    const script = scripts.files.find(s => s.fileName === selectedEditor.fileName);

    const scriptPath = path.join(projectPath, "sources", script.fileName);
    fs.writeFileSync(scriptPath, script.content, "utf8");

    dispatch({
      type: "SHOW_INFO_MESSAGE",
      payload: { info: `Script "${script.fileName}" saved.` }
    });

    dispatch({
      type: "SCRIPT_SAVED",
      payload: { fileName: script.fileName }
    })
  }
}

export const readProject = projectFilePath => dispatch => {
  const projectPath = path.dirname(projectFilePath);
  const projectFile = JSON.parse(fs.readFileSync(projectFilePath, "utf8"));

  fs.readdir(path.join(projectPath, "sources"), (err, files) => {
    files.forEach(fileName => {
      dispatch({
        type: "READ_SCRIPT",
        payload: { fileName },
      })
    });
  })

  dispatch({
    type: "READ_PROJECT",
    payload: {
      projectPath,
      name: projectFile.name,
    }
  });
}
