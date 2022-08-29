import { ReactNode } from "react";

export interface IContent {
  contentTitle: string | undefined
  amountBasketProducts?: number
  children: ReactNode
}