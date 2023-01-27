import { useGameContext } from '../context/GameContext';
import './Box.css';

export default function Box({ box }) {
  const { currentPlayer, setCurrentPlayer, board, setBoard, isActive } = useGameContext();

  function clickHandler() {
    console.log('wow what a click!');
  }

  return (
    <div className="btn" onClick={clickHandler}>
      {box.content}
    </div>
  );
}
