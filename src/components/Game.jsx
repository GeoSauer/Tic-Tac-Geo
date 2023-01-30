import { useGameContext } from '../context/GameContext';
import Board from './Board';
import ReactConfetti from 'react-confetti';
import './Game.css';

export default function Game() {
  const { gameMessage, isActive, resetClickHandler, mushroomWins, cactusWins, wonGame } =
    useGameContext();

  return (
    <div className="game">
      <header>
        <h1>Tic-Tac-Geo</h1>
        <h2>(The Game as Old as Time)</h2>
      </header>
      <div className="scoreboard">
        <span>🍄: {mushroomWins}</span>
        <span>🚨SCOREBOARD🚨</span>
        <span>🌵: {cactusWins}</span>
      </div>
      {/* if game is active display the board and message */}
      {isActive && (
        <>
          <Board />
          <div className="game-info">
            <div>{gameMessage}</div>
          </div>
        </>
      )}
      {/* if game is over display the board, message and button */}
      {!isActive && (
        <>
          <Board />
          <div className="game-info">
            <div>{gameMessage}</div>
            <div className="container">
              <button onClick={resetClickHandler}>Play Again?</button>
            </div>
          </div>
        </>
      )}
      {/* if game has a winner pop the confetti */}
      {wonGame && <ReactConfetti />}
    </div>
  );
}
