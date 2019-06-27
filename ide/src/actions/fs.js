import { showInfoMessage, showErrorMessage } from "./messages";

const fs = window.require("fs");
const path = window.require("path");

export const deleteScript = scriptName => (dispatch, getState) => {
  const { project: { projectPath } } = getState()
  const scriptPath = path.join(projectPath, "sources", scriptName);

  fs.unlink(scriptPath, err => {
    if (err) {
      dispatch(showErrorMessage(`Error deleting script "${scriptName}"`));
    } else {
      dispatch(showInfoMessage(`Script deleted "${scriptName}"`));
      dispatch({
        type: "SCRIPT_DELETED",
        payload: { fileName: scriptName },
      })
    }
  });
}

export const createScript = scriptName => (dispatch, getState) => {
  const { project: { projectPath } } = getState()
  const scriptPath = path.join(projectPath, "sources", scriptName);

  fs.writeFile(scriptPath, "", "utf8", err => {
    if (err) {
      dispatch(showErrorMessage(`Error creating script "${scriptName}"`));
    } else {
      dispatch({
        type: "READ_SCRIPT",
        payload: { fileName: scriptName },
      })
    }
  })
}

export const readScript = scriptName => (dispatch, getState) => new Promise((resolve, reject) => {
  const { project: { projectPath } } = getState()

  const scriptPath = path.join(projectPath, "sources", scriptName);
  const fileContent = fs.readFile(scriptPath, "utf8", (err, fileContent) => {
    if (err) {
      dispatch(showErrorMessage(`Error reading script "${scriptName}"`));
      reject(err);
    } else {
      dispatch({
        type: "READ_SCRIPT_CONTENT",
        payload: { scriptName, fileContent }
      })
      resolve();
    }
  });
})

export const saveFile = () => (dispatch, getState) => {
  const { workspace, scripts, project: { projectPath } } = getState();

  const selectedEditor = workspace.editors.find(({ selected }) => selected);

  if (selectedEditor.type === "SCRIPT") {
    const script = scripts.files.find(s => s.fileName === selectedEditor.fileName);

    const scriptPath = path.join(projectPath, "sources", script.fileName);
    fs.writeFile(scriptPath, script.content, "utf8", err => {
      if (err) {
        dispatch(showErrorMessage(`Error saving script "${script.fileName}"`));
      } else {
        dispatch(showInfoMessage(`Script "${script.fileName}" saved.`));

        dispatch({
          type: "SCRIPT_SAVED",
          payload: { fileName: script.fileName }
        })
      }
    });
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
