// const { ball } = data;

export function ballMovement(ctx, ball) {
  const {
    x, y, rad, dx, dy,
  } = ball;

  // draw the ball
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x, y, rad, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.strokeWidth = 4;
  ctx.fill();
  ctx.stroke();

  // move the ball - mutate data object
  ball.x += dx;
  ball.y += dy;
}

export function ballWallCollision(canvas, ball) {
  const {
    x, y, rad,
  } = ball;

  // // ball is hitting top or bottom
  if (y - rad <= 0 || y + rad >= canvas.height) {
    ball.dy *= -1;
  }

  if (x - rad < 0 || x + rad >= canvas.width) {
    ball.dx *= -1;
  }
}
