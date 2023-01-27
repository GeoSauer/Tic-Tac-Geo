import { useGameContext } from '../context/GameContext';
import './Box.css';

export default function Box({ box }) {
  const { currentPlayer, setCurrentPlayer, board, setBoard, isActive, setGameMessage } =
    useGameContext();

  function clickHandler() {
    if (box.content !== '') return;
    if (!isActive) return;

    box.content = currentPlayer;
    const newBoard = [...board];
    setBoard(newBoard);

    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
      setGameMessage('Your move O!');
    } else {
      setCurrentPlayer('X');
      setGameMessage('Your move again X!');
    }
  }

  return (
    <div className="btn" onClick={() => clickHandler()}>
      {box.content}
    </div>
  );
}
