import qriTools from "qri-tools"
const { BrowserWindow } = window.require("electron").remote;

const compiler = qriTools.compiler.current;

export const runGame = () => (dispatch, getState) => {
  // compile game

  // Open emulator window
  const emulatorWindow = new BrowserWindow({ width: 800, height: 600 });

  emulatorWindow.webContents.on("did-finish-load", () => {
    const { project: { projectPath } } = getState();
    const gameData = compiler.toGameData(projectPath);
    emulatorWindow.webContents.send("loadGame", gameData);
  });

  emulatorWindow.loadFile("emulator.html");
}
