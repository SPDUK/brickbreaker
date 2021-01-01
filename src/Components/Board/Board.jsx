import React, { useRef, useEffect } from 'react';
import { board } from './board.module.scss';

import data from '../../logic/data';
import { ballMovement, ballWallCollision } from '../../logic/ball';
import paddleMovement from '../../logic/paddle';
import generateBricks from '../../logic/generateBricks';
import checkBrickHit from '../../logic/brickCollision';
import paddleHit from '../../logic/paddleHit';

const {
  ball, paddle, brick, player,
} = data;

let bricks = [];

export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // set paddle y based on canvas
    paddle.y = canvas.height - 30;

    const render = () => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // generate bricks
      const brickSet = generateBricks(2, bricks, canvas, brick);

      if (brickSet && brickSet.length) {
        bricks = brickSet;
      }
      // draw bricks
      bricks.forEach((b) => b.draw(ctx));

      ballMovement(ctx, ball);
      ballWallCollision(canvas, ball);

      checkBrickHit(ball, bricks, player);
      // check any brick has been hit by the ball
      paddleMovement(ctx, canvas, paddle);

      // check if the ball hits the paddle
      paddleHit(ball, paddle);
    };

    render();

    return () => {
      cancelAnimationFrame(render);
      // TODO: add reset function here
    };
  }, []);

  function handleMouseMove({ clientX }) {
    paddle.x = clientX - paddle.width / 2 - 10;
  }

  return (
    <canvas ref={canvasRef} onMouseMove={handleMouseMove} className={board} id="canvas" height="500px" width="800px" />
  );
}
