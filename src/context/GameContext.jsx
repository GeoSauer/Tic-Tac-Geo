import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState([
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
  const [gameMessage, setGameMessage] = useState('Your turn X, click a square to start the game!');
  const [isActive, setIsActive] = useState(true);

  const checkWinner = () => {
    if (board[0].content === board[1].content && board[1].content === board[2].content) {
      return board[2].content;
    }
    if (board[3].content === board[4].content && board[4].content === board[5].content) {
      return board[5].content;
    }
    if (board[6].content === board[7].content && board[7].content === board[8].content) {
      return board[8].content;
    }
    if (board[0].content === board[3].content && board[3].content === board[6].content) {
      return board[6].content;
    }
    if (board[1].content === board[4].content && board[4].content === board[7].content) {
      return board[7].content;
    }
    if (board[2].content === board[5].content && board[5].content === board[8].content) {
      return board[8].content;
    }
    if (board[0].content === board[4].content && board[4].content === board[8].content) {
      return board[8].content;
    }
    if (board[2].content === board[4].content && board[4].content === board[6].content) {
      return board[6].content;
    }
  };

  // const isCatsGame = () => {
  //   if (board[0].content !== '' && board[0].content !== '' &&
  // };
  const checkGameStatus = () => {
    if (!isActive) return;
    const winner = checkWinner();
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setIsActive(false);
    }
  };
  checkGameStatus();

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        board,
        setBoard,
        gameMessage,

        setGameMessage,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};

export { GameProvider, useGameContext };
