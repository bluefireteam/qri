import Engine from "engine"
const ipc = require("electron").ipcRenderer;

ipc.on("loadGame", (event, message) => {
  Console.start(message);
})

const Console = {
  start: gameData => {
    const canvasParent = document.querySelector("body");
    const height = canvasParent.offsetHeight - (canvasParent.offsetHeight * 0.2);
    const width = height;

    const canvas = document.getElementById("game-screen");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    const scaleFactor = width / 160;
    const engine = Engine(scaleFactor, canvas)
    engine.loadGame(gameData);
    //controls.init(engine.ondPadDown, engine.ondPadUp);
  }
}
