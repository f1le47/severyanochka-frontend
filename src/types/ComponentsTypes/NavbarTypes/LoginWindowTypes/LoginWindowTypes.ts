import { FormikConfig, FormikValues } from "formik"
import { Dispatch, SetStateAction } from "react"

export type LoginWindowType = {
  isLoginWindowVisible: boolean,
  setIsLoginWindowVisible: Dispatch<SetStateAction<boolean>>
}

export type LoginWindowFormType = {
  phone: number | undefined
}