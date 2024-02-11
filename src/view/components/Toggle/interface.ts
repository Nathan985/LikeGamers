import { ReactNode } from "react";

export type IToggleType = {
  defaultValue?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
  children?: ReactNode | ((data: { enabled: boolean }) => ReactNode)
}