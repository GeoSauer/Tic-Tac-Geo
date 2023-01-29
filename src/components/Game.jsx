import { useGameContext } from '../context/GameContext';
import Board from './Board';
import './Board.css';

export default function Game() {
  const { board, gameMessage, isActive, resetClickHandler } = useGameContext();

  return (
    <div className="game">
      {isActive && (
        <>
          <div className="game-board">
            <Board board={board}></Board>
          </div>
          <div className="game-info">
            <div>{gameMessage}</div>
          </div>
        </>
      )}
      {!isActive && (
        <>
          <div className="game-board">
            <Board board={board}></Board>
          </div>
          <div className="game-info">
            <div>{gameMessage}</div>
            <button onClick={resetClickHandler}>Play Again!</button>
          </div>
        </>
      )}
    </div>
  );
}
