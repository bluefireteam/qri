import Graphics from './graphics'

// https://lospec.com/palette-list/dawnbringers-8-color
const defaultPalette = [
  "#000000",
  "#55415f",
  "#646964",
  "#d77355",
  "#508cd7",
  "#64b964",
  "#e6c86e",
  "#dcf5ff"
]

const now = () => new Date().getTime();

const evalGame = game => {
  const context = {};
  eval.call(context, game);
  return context
}

export default ( scaleFactor, canvas, palette = defaultPalette) => {
  let running = true;

  return ({
    unload: () => {
      running = false
    },
    loadGame: gameData => {
      const game = evalGame(gameData);
      const ctx = canvas.getContext("2d")
      const graphics = Graphics(ctx, palette, scaleFactor)

      let time = now();

      const tick = () => {
        graphics.fill(0, 0, 160, 160, 0)
        const tickTime = now();
        const delta = tickTime - time;
        time = tickTime;

        if (update) update(delta)
        if (render) render(graphics)

        if (running) {
          requestAnimationFrame(tick);
        }
      }

      tick();
    }
  })
}
