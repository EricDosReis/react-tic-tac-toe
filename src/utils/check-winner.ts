import type { BoardState, Player } from "../types";

export const WINNING_COMBINATIONS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (board: BoardState): Player | null => {
  for (const combination of WINNING_COMBINATIONS) {
    const [positionA, positionB, positionC] = combination;

    if (
      board[positionA] &&
      board[positionA] === board[positionB] &&
      board[positionA] === board[positionC]
    ) {
      return board[positionA];
    }
  }

  return null;
};

export { checkWinner };
