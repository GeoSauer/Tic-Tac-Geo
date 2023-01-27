import { useGameContext } from '../context/GameContext';
import './Box.css';

export default function Box({ box, index }) {
  const { currentPlayer, setCurrentPlayer, board, setBoard, isActive } = useGameContext();

  const clickHandler = (space, content) => {
    if (box.content !== '') return;
    if (!isActive) return;
    console.log('wow what a click!', index);
  };

  return (
    <div className="btn" onClick={() => clickHandler()}>
      {box.content}
    </div>
  );
}
