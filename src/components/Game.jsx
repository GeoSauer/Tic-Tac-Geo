import { useGameContext } from '../context/GameContext';
import Board from './Board';
import './Game.css';

export default function Game() {
  const { gameMessage, isActive, resetClickHandler } = useGameContext();

  return (
    <div className="game">
      <header>
        <h1>Tic-Tac-Geo</h1>
        <h2>The Battle as Old as Time Between 🍄 and 🌵</h2>
      </header>
      {isActive && (
        <>
          <Board />
          <div className="game-info">
            <div>{gameMessage}</div>
          </div>
        </>
      )}
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
    </div>
  );
}
