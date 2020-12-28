export default function paddleMovement(ctx, canvas, paddleProps) {
  const y = canvas.height - 30;
  const height = 20;
  const { width, x, color } = paddleProps;

  // creates rectangle for paddle
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.fillStyle = color;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'blue';
  ctx.strokeRect(x, y, width, height);
  ctx.fill();

  if (x <= 0) {
    paddleProps.x = 0;
  } else if (x + width >= canvas.width) {
    paddleProps.x = canvas.width - width;
  }
}
