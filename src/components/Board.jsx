import { useGameContext } from '../context/GameContext';
import Box from './Box';

export default function Board() {
  const { board } = useGameContext();

  return (
    <div className="board">
      {board.map((box, index) => (
        <Box key={index} {...{ box }} />
      ))}
    </div>
  );
}
