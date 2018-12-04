import controls from "./modules/controls";
import Engine from "engine"

window.Console = {
  start: () => {
    screen.orientation.lock("landscape");

    const canvasParent = document.querySelector(".screen-container");
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
    controls.init(engine.ondPadDown, engine.ondPadUp);
  }
}
