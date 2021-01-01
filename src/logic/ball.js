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
  ctx.strokeWidth = 1;
  ctx.fill();
  ctx.stroke();

  // move the ball - mutate data object
  ball.x += dx;
  ball.y += dy;
}

export function ballWallCollision(canvas, ball, paddle, player) {
  if (ball.y + ball.rad > canvas.height) {
    // remove a life
    player.lives -= 1;

    ball.x = paddle.x;
    ball.y = paddle.y - 30;
    ball.dx = 6 * (Math.random() * 2 - 1);
    ball.dy = -6;
  }
  if (ball.y - ball.rad < 0) {
    ball.dy *= -1;
  }

  if (ball.x + ball.rad > canvas.width || ball.x - ball.rad < 0) {
    ball.dx *= -1;
  }
}
