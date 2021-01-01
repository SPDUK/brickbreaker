export default function paddleHit(ball, paddle) {
  if (
    ball.x < paddle.x + paddle.width
    && ball.x > paddle.x
    && paddle.y < paddle.y + paddle.height
    && ball.y + ball.rad > paddle.y - paddle.height / 2
  ) {
    // check where the ball hit the paddle
    let collidePoint = ball.x - (paddle.x + paddle.width / 2);

    // normalize values
    collidePoint /= (paddle.width / 2);

    // calc angle of the ball
    const angle = (collidePoint * Math.PI) / 3;

    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
  }
}
