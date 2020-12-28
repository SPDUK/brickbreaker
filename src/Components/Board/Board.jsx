import React, { useRef, useEffect } from 'react';
import { board } from './board.module.scss';

import data from '../../logic/data';
import { ballMovement, ballWallCollision } from '../../logic/ball';
import paddleMovement from '../../logic/paddle';

const { ball, paddle } = data;

export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ballMovement(ctx, ball);
      ballWallCollision(canvas, ball);
      paddleMovement(ctx, canvas, paddle);
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
