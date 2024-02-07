import React from "react"
import { GameContext } from "."

export const useGameContext = () => {
  return React.useContext(GameContext);
}