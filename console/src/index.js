import engine from "engine"

window.Console = {
  start: () => {
    screen.orientation.lock("landscape");

    const canvasParent = document.querySelector(".screen-container");
    const width = canvasParent.offsetWidth;
    const height = canvasParent.offsetHeight;

    const canvas = document.getElementById("game-screen");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
  }
}
