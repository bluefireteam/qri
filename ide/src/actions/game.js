import qriTools from "qri-tools";
import qrcode from "qrcode-generator";
const { BrowserWindow } = window.require("electron").remote;

const compiler = qriTools.compiler.current;

const generateGameData = state => {
  const { project: { projectPath } } = state;
  return compiler.toGameData(projectPath);
}

export const runGame = () => (dispatch, getState) => {

  // Open emulator window
  const emulatorWindow = new BrowserWindow({ width: 800, height: 600 });

  emulatorWindow.webContents.on("did-finish-load", () => {
    const gameData = generateGameData(getState());
    emulatorWindow.webContents.send("loadGame", gameData);
  });

  emulatorWindow.loadFile("emulator.html");
}

export const generateQr = () => (dispatch, getState) => {
  const gameData = generateGameData(getState());
  const qr = qrcode(0, "H");
  qr.addData(gameData);
  qr.make();
  const qrData = qr.createDataURL(5);

  dispatch({
    type: "LOAD_QR",
    payload: { qrData }
  });
}
