import { motion } from "motion/react";

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
    <motion.button
      type="button"
      className={`h-18 w-18 cursor-pointer rounded-xl border-4 text-4xl font-bold text-gray-100 sm:h-32 sm:w-32 ${getPlayerColor(value)} ${getSquareColor(value, isWinner)}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      {value && (
        <motion.span
          className="block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
}

export { Square };
