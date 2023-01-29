import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('🍄');
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
  const [gameMessage, setGameMessage] = useState('Your turn 🍄, click a square to start the game!');
  const [isActive, setIsActive] = useState(true);

  // check to see if a row/column of boxes all have the same content and that the content is not an empty string
  const checkWinner = () => {
    if (
      board[0].content === board[1].content &&
      board[1].content === board[2].content &&
      board[2].content !== ''
    ) {
      return board[2].content;
    } else if (
      board[3].content === board[4].content &&
      board[4].content === board[5].content &&
      board[5].content !== ''
    ) {
      return board[5].content;
    } else if (
      board[6].content === board[7].content &&
      board[7].content === board[8].content &&
      board[8].content !== ''
    ) {
      return board[8].content;
    } else if (
      board[0].content === board[3].content &&
      board[3].content === board[6].content &&
      board[6].content !== ''
    ) {
      return board[6].content;
    } else if (
      board[1].content === board[4].content &&
      board[4].content === board[7].content &&
      board[7].content !== ''
    ) {
      return board[7].content;
    } else if (
      board[2].content === board[5].content &&
      board[5].content === board[8].content &&
      board[8].content !== ''
    ) {
      return board[8].content;
    } else if (
      board[0].content === board[4].content &&
      board[4].content === board[8].content &&
      board[8].content !== ''
    ) {
      return board[8].content;
    } else if (
      board[2].content === board[4].content &&
      board[4].content === board[6].content &&
      board[6].content !== ''
    ) {
      return board[6].content;
    }
  };

  const isCatsGame = () => {
    // create an array of boxes with direct access to their contents
    const contents = board.map((box) => box.content);
    return contents;
  };

  const checkGameStatus = () => {
    // if game is inactive, return
    if (!isActive) return;

    // check for a winner and update message if there is one
    const winner = checkWinner();
    const contents = isCatsGame();
    if (winner) {
      setGameMessage(`You win ${winner}!`);
      setIsActive(false);
    }
    // check if every box has content but no winner has been chosen
    if (!contents.includes('') && !winner) {
      setGameMessage("That's a tie folx!");
      setIsActive(false);
    }
  };
  checkGameStatus();

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
        resetClickHandler,
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
