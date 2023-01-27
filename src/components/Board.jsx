import { useGameContext } from '../context/GameContext';
import Box from './Box';
import './Box.css';

export default function Board() {
  const { board } = useGameContext();

  return (
    <div className="board">
      {board.map((box) => (
        <Box key={box.space} {...{ box }} />
      ))}
    </div>
  );
}
