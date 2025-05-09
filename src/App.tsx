import { Gamepad2 } from "lucide-react";
import { useState } from "react";

import { Board } from "./components/Board";
import { BoardState } from "./types";
import { checkWinner } from "./utils/check-winner";
import { isBoardFull } from "./utils/is-board-full";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const handleClick = (index: number) => {
    if (board[index] || winner) return null;

    setBoard(
      board.map((square, boardIndex) =>
        index === boardIndex ? currentPlayer : square,
      ),
    );
  };

  const getGameStatus = () => {
    if (winner) return `Player ${winner} wins!`;

    if (isBoardFull(board)) {
      return "It's a draw!";
    }

    return `Player ${currentPlayer}'s turn`;
  };

  const winner = checkWinner(board);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Gamepad2 className="text-pink h-8 w-8" />

          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
        </div>

        <div className="mb-6 text-center">
          <p className="text-xl font-semibold text-gray-100">
            {getGameStatus()}
          </p>
        </div>

        <Board board={board} onClick={handleClick} />
      </div>
    </main>
  );
}

export default App;
