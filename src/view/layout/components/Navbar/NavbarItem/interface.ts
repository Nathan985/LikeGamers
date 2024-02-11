import { ElementType } from "react";

export type INavbarItemType = {
  onClick?: () => void;
  currentRoute?: boolean;
  title: string;
  Icon: ElementType<any>
  className?: string
}