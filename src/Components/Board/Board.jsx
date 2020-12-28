import React from 'react';
import { canvas } from './board.module.scss';

export default function Board() {
  return (
    <canvas className={canvas} id="canvas" height="500px" width="800px" />
  );
}
