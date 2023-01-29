import { useGameContext } from '../context/GameContext';
import './Box.css';

export default function Box({ box }) {
  const { isActive, board, setBoard, currentPlayer, setCurrentPlayer, setGameMessage } =
    useGameContext();

  const boxClickHandler = () => {
    // if clicked box is already filled, return
    if (box.content) return;

    // if game is inactive, return
    if (!isActive) return;

    // otherwise print current player on the box
    box.content = currentPlayer;
    const newBoard = [...board];
    setBoard(newBoard);

    //check current player and update message appropriately
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
