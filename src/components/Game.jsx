import { useGameContext } from '../context/GameContext';
import Board from './Board';
import './Board.css';

export default function Game() {
  const { board, gameMessage } = useGameContext();

  return (
    <div className="game">
      <div className="game-board">
        <Board board={board}></Board>
      </div>
      <div className="game-info">
        <div>{gameMessage}</div>
        <button>Play Again</button>
      </div>
    </div>
  );
}
