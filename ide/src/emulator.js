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

    document.addEventListener("keydown", evt => {
      if (evt.key == "w" || evt.key == "ArrowUp") {
        dpadDown("UP");
      }
      if (evt.key == "s" || evt.key == "ArrowDown") {
        dpadDown("DOWN");
      }
      if (evt.key == "a" || evt.key == "ArrowLeft") {
        dpadDown("LEFT");
      }
      if (evt.key == "d" || evt.key == "ArrowRight") {
        dpadDown("RIGHT");
      }
    });

    document.addEventListener("keyup", evt => {
      if (evt.key == "w" || evt.key == "ArrowUp") {
        dpadUp("UP");
      }
      if (evt.key == "s" || evt.key == "ArrowDown") {
        dpadUp("DOWN");
      }
      if (evt.key == "a" || evt.key == "ArrowLeft") {
        dpadUp("LEFT");
      }
      if (evt.key == "d" || evt.key == "ArrowRight") {
        dpadUp("RIGHT");
      }
    });
  }
}
