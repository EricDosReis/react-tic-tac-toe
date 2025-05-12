import type { BoardState, Player } from "../types";
import { WINNING_COMBINATIONS } from "../utils/check-winner";
import { Square } from "./Square";

type BoardProps = {
  board: BoardState;
  winner: Player | null;
  onClick: (index: number) => void;
};

function Board({ board, winner, onClick }: BoardProps) {
  const isWinner = (index: number) => {
    if (!winner) return false;

    return WINNING_COMBINATIONS.some(
      (combination) =>
        combination.includes(index) &&
        combination.every(
          (combinationIndex) => board[combinationIndex] === winner,
        ),
    );
  };

  return (
    <div className="mx-auto grid w-auto max-w-[26rem] grid-cols-3 justify-items-center gap-4">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          isWinner={isWinner(index)}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}

export { Board };
