export default (ctx, palette, scaleFactor) => {
  const s = v => v * scaleFactor

  return ({
    fill: (x, y, w, h, colorIdx) => {
      ctx.fillStyle = palette[colorIdx]
      ctx.fillRect(s(x), s(y), s(w), s(h))
    }
  })
}
