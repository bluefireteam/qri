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
  dx = -1,
  dy = 1,
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
  if (move === "UP") {
    y1 = y2 -= speed(70, d)
    if (y1 < 0) y1 = y2 = 0;
  }

  if (move === "DOWN") {
    y1 = y2 += speed(70, d)
    if (y1 + h >= 160) y1 = y2 = 160 - h;
  }



  bx += speed(50, d) * dx
  by += speed(50, d) * dy

  if (bx < 0 || bx + bw > 160) dx = dx * -1;
  if (by < 0 || by + bh > 160) dy = dy * -1;
}

function render(g) {
  g.fill(x1, y1, w, h, 7)
  g.fill(x2, y2, w, h, 7)
  g.fill(bx, by, bw, bh, 2)
}
