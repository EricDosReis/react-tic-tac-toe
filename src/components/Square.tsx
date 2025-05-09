import type { Player } from "../types";
import { getPlayerColor } from "../utils/get-player-color";
import { getSquareColor } from "../utils/get-square-color";

type SquareProps = {
  value: Player | null;
  isWinner: boolean;
  onClick: () => void;
};

function Square({ value, isWinner, onClick }: SquareProps) {
  return (
    <button
      type="button"
      className={`h-32 w-32 rounded-xl border-4 text-4xl font-bold text-gray-100 ${getPlayerColor(value)} ${getSquareColor(value, isWinner)}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export { Square };
