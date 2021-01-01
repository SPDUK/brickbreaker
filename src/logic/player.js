export default function playerStats(ctx, player, canvas) {
  // name
  // ctx.font = '20px Arial';
  // ctx.fillStyle = 'white';
  // ctx.fillText(`Name: ${player.name}`, 20, 30);

  // lives
  ctx.font = '20px Arial';
  ctx.fillStyle = 'red';

  for (let i = 0; i < player.lives; i += 1) {
    // use idx * 30 for gap between each heart
    ctx.fillText('❤️', 20 + (i * 30), 30);
  }

  // score
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
