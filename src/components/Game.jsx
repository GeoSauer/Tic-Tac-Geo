import { useGameContext } from '../context/GameContext';
import Board from './Board';
import './Board.css';

export default function Game({ box }) {
  const { board, gameMessage, isActive } = useGameContext();
  function checkWinner() {
    console.log('wadsafd', board);
    //     if (((board.content[0] === board.content[1]) === board.content[2]) === 'X')
  }

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
            <button>Play Again!</button>
          </div>
        </>
      )}
    </div>
  );
}
