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

export default (( scaleFactor, canvas, palette = defaultPalette) => {
  let running = true;

  return ({
    unload: () => {
      running = false
    },
    loadGame: game => {
      const ctx = canvas.getContext("2d")
      const graphics = Graphics(ctx)

      let time = now();

      const tick = () => {
        graphics.fill(0, 0, 160, 160, 0)
        const tickTime = now();
        const delta = tickTime - time;
        time = tickTime;

        if (game.update) game.update(delta)
        if (game.render) game.render(graphics)

        if (running) {
          requestAnimationFrame(tick);
        }
      }

      tick();
    }
  })
})
