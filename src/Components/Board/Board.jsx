import React, { useRef, useEffect } from 'react';
import { board } from './board.module.scss';

import data from '../../data';
import ballMovement from '../Ball/ballMovement';

const { ball } = data;

export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // // ball is hitting top or bottom
      if (ball.y - ball.rad <= 0 || ball.y + ball.rad >= canvas.height) {
        ball.dy *= -1;
      }

      if (ball.x - ball.rad < 0 || ball.x + ball.rad >= canvas.width) {
        ball.dx *= -1;
      }

      ballMovement(ctx, ball);
    };

    render();

    return () => {
      cancelAnimationFrame(render);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={board} id="canvas" height="500px" width="800px" />
  );
}
