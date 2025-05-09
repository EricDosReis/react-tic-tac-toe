import { Player } from "../types";

const getSquareColor = (value: Player | null, isWinner: boolean) => {
  if (!isWinner) return "border-gray-200";

  return value === "X" ? "border-pink" : "border-white";
};

export { getSquareColor };
