import React from "react"
import { LayoutContext } from "."

export const useLayoutContext = () => {
  return React.useContext(LayoutContext)
}