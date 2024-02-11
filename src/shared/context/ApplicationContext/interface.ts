import { ReactNode } from "react";

export type IApplicationContextType = {
  darkMode: boolean
  toggleMode: (data?: boolean) => void;
}

export type IApplicationProviderContextType = {
  children: ReactNode
}