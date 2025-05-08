import type { Player } from "../types";

const getPlayerColor = (value: Player | null) => {
  return value === "X" ? "text-pink" : "text-white";
};

export { getPlayerColor };
