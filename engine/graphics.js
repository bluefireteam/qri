export default (palette, scaleFactor, ctx) => {
  const s = v => v * scaleFactor

  return ({
    fill: (x, y, w, h, colorIdx) => {
      ctx.fillStyle = palette[idx]
      ctx.fillRect(s(x), s(y), s(w), s(h))
    }
  })
}
