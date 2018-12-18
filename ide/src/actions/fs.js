const fs = window.require("fs");
const path = window.require("path");

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
