import { useGameContext } from '../context/GameContext';
import Box from './Box';

export default function Board({ onClick }) {
  const {
    currentPlayer,
    setCurrentPlayer,
    board,
    setBoard,
    gameMessage,
    setGameMessage,
    isActive,
    setIsActive,
  } = useGameContext();

  console.log(
    currentPlayer,
    'currentPlayer',
    setCurrentPlayer,
    'setCurrentPlayer',
    board,
    'board',
    setBoard,
    'setBoard',
    gameMessage,
    'gameMessage',
    setGameMessage,
    'setGameMessage',
    isActive,
    'isActive',
    setIsActive,
    'setIsActive'
  );

  return (
    <div className="board">
      <div>
        <Box
          value={board[0]}
          onClick={() => {
            onClick(0);
          }}
        />
        <Box
          value={board[1]}
          onClick={() => {
            onClick(1);
          }}
        />
        <Box
          value={board[2]}
          onClick={() => {
            onClick(2);
          }}
        />
      </div>
      <div>
        <Box
          value={board[3]}
          onClick={() => {
            onClick(3);
          }}
        />
        <Box
          value={board[4]}
          onClick={() => {
            onClick(4);
          }}
        />
        <Box
          value={board[5]}
          onClick={() => {
            onClick(5);
          }}
        />
      </div>
      <div>
        <Box
          value={board[6]}
          onClick={() => {
            onClick(6);
          }}
        />
        <Box
          value={board[7]}
          onClick={() => {
            onClick(7);
          }}
        />
        <Box
          value={board[8]}
          onClick={() => {
            onClick(8);
          }}
        />
      </div>
    </div>
  );
}
