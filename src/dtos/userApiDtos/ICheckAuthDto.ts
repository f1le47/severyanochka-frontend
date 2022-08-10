import { IDefaultDto } from "./IDefaultDto";

export interface ICheckAuthDto extends IDefaultDto {
  user: UserType
}

export type UserType = {
  phoneNumber: string
  name: string
  surname: string
  birthday: string
  region: string
  city: string
  gender: 'male' | 'female'
  role: string
  isActivated: boolean
}