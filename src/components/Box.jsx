import { useGameContext } from '../context/GameContext';
import './Box.css';

export default function Box({ box }) {
  const { currentPlayer, setCurrentPlayer, board, setBoard, isActive, setGameMessage } =
    useGameContext();

  const boxClickHandler = () => {
    if (box.content !== '') return;
    if (!isActive) return;

    box.content = currentPlayer;
    const newBoard = [...board];
    setBoard(newBoard);

    if (currentPlayer === '🍄') {
      setCurrentPlayer('🌵');
      setGameMessage('Your move 🌵!');
    } else {
      setCurrentPlayer('🍄');
      setGameMessage('Your move again 🍄!');
    }
  };

  return (
    <div className="btn" onClick={boxClickHandler}>
      {box.content}
    </div>
  );
}
