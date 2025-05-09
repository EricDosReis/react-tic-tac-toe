import type { BoardState } from "../types";

const isBoardFull = (board: BoardState): boolean => {
  return !board.includes(null);
};

export { isBoardFull };
