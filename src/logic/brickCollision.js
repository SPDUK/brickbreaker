// circle = ball, rect = brick
function checkBrickCollision(circle, rect) {
  const distX = Math.abs(circle.x - rect.x - rect.width / 2);
  const distY = Math.abs(circle.y - rect.y - rect.height / 2);

  if (distX > rect.width / 2 + circle.rad) {
    return {
      hit: false,
    };
  }
  if (distY > rect.height / 2 + circle.rad) {
    return {
      hit: false,
    };
  }

  if (distX <= rect.width / 2) {
    return {
      hit: true,
      axis: 'Y',
    };
  }
  if (distY <= rect.height / 2) {
    return {
      hit: true,
      axis: 'X',
    };
  }

  // also test for corner collisions
  const dx = distX - rect.width / 2;
  const dy = distY - rect.height / 2;
  return {
    hit: dx * dx + dy * dy <= circle.rad * circle.rad,
    axis: 'X',
  };
}

export default function checkBrickHit(ball, bricks, player) {
  bricks.forEach(((brick) => {
    const brickCollision = checkBrickCollision(ball, brick);
    if (brickCollision.hit && !brick.broke) {
      // console.log(brickCollision);
      if (brickCollision.axis === 'X') {
        ball.dx *= -1;
        brick.broke = true;
      } else if (brickCollision.axis === 'Y') {
        ball.dy *= -1;
        brick.broke = true;
      }
      player.score += 10;
    }
  }));
}
