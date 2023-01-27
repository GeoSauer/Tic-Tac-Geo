import { useGameContext } from '../context/GameContext';
import Board from './Board';

export default function Game() {
  const { board } = useGameContext();

  return (
    <div className="game">
      <div className="game-board">
        <Board board={board}></Board>
      </div>
      <div className="game-info">
        <div>Next player is X</div>
        <button>Start the game!</button>
      </div>
    </div>
  );
}
