import React from "react"
import { ApplicationContext } from "."

export const useApplicationContext = () => {
  return React.useContext(ApplicationContext)
}