import { IDefaultDto } from "dtos/IDefaultDto";

export interface ICheckAuthDto extends IDefaultDto {
  user: UserType
}

export type UserType = {
  id: number
  phoneNumber: string
  name: string
  surname: string
  birthday: string
  region: string
  city: string
  gender: 'male' | 'female'
  role: string
  isActivated: boolean
  haveSavingsCard: boolean
}