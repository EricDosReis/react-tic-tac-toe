import type { Player } from "../types";
import { getPlayerColor } from "../utils/get-player-color";

type SquareProps = {
  value: Player | null;
  onClick: () => void;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      type="button"
      className={`h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold text-gray-100 ${getPlayerColor(value)}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export { Square };
