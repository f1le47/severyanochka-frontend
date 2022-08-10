import { SchemaOf } from "yup"

export interface IInput {
  inputLabel: string
  inputType: 'text' | 'password' | 'date' | 'code'
  yupValidator: SchemaOf<any>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputVisual: 'narrow' | 'wide',
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>
}