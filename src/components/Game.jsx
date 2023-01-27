// import React, { useState } from 'react';
// import { useGameContext } from '../context/GameContext';
import Board from './Board';

export default function Game() {
  //   const { board } = useGameContext();
  //   const boxes = Array(9).fill(null);
  return (
    <div className="game">
      <div className="game-board">
        {/* <Board board={board}></Board> */}
        <Board></Board>
      </div>
      <div className="game-info">
        <div>Next player is X</div>
        <button>Start the game!</button>
      </div>
    </div>
  );
}
