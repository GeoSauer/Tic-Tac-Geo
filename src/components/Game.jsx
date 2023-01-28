import { useGameContext } from '../context/GameContext';
import Board from './Board';
import './Board.css';

export default function Game() {
  const { board, setBoard, gameMessage, setGameMessage, isActive, setIsActive, setCurrentPlayer } =
    useGameContext();

  const resetClickHandler = () => {
    setCurrentPlayer('🍄');
    setBoard([
      { space: 0, content: '' },
      { space: 1, content: '' },
      { space: 2, content: '' },
      { space: 3, content: '' },
      { space: 4, content: '' },
      { space: 5, content: '' },
      { space: 6, content: '' },
      { space: 7, content: '' },
      { space: 8, content: '' },
    ]);
    setGameMessage('Your turn 🍄, click a square to start the game!');
    setIsActive(true);
  };

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
