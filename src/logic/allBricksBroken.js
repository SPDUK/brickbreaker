import data from './data';
import resetBall from './resetBall';

export default function allBricksBroken(bricks, player, ball) {
  const { brick, paddle } = data;
  let total = 0;
  for (let i = 0; i < bricks.length; i += 1) {
    if (bricks[i].broke === true) {
      total += 1;
    }
  }
  if (total === bricks.length) {
    player.level += 1;
    resetBall(ball, paddle);
    brick.y = 50;
  }
}
