import { JSXElementConstructor, ReactElement, ReactNode } from "react"

export interface IAuthWindowWrapper {
  title: string,
  btnText: string,
  authRedirectBtns: Array<ReactElement<any, string | JSXElementConstructor<any>>>,
  children: ReactNode,
  handleSubmit: () => void,
  isValid: boolean,
  isTouched: boolean
  timer?: ReactNode
}