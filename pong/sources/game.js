var x1 = 5,
  x2 = 150,
  y1 = 60,
  y2 = 60,
  w = 5,
  h = 20,
  bx = 75,
  by = 75,
  bw = 5,
  bh = 5,
  move = null;

function speed(pixelPerSeconds, delta) {
  return (pixelPerSeconds / 1000) * delta
}

function load() {
}

function dpadDown(key) {
  if (key === "UP" || key === "DOWN")  move = key
}

function dpadUp(key) {
  if (key === "UP" || key === "DOWN")  move = null
}

function update(d) {
  if (move === "UP") y1 = y2 += speed(70, d)
  if (move === "DOWN") y1 = y2 -= speed(70, d)

  bx += speed(50, d)
  by += speed(50, d)
}

function render(g) {
  g.fill(x1, y1, w, h, 7)
  g.fill(x2, y2, w, h, 7)
  g.fill(bx, by, bw, bh, 2)
}
