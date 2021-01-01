export default function resetBall(ball, paddle) {
  ball.x = paddle.x;
  ball.y = paddle.y - 80;
  ball.dx = 6 * (Math.random() * 2 - 1);
  ball.dy = -6;
}
