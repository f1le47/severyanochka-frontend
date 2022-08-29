import { IDefaultDto } from "dtos/IDefaultDto";

export interface ISavingsCardDto extends IDefaultDto {
  savingsCard: SavingsCardType
}

export type SavingsCardType = {
  numberOfPoints: number,
  userId: number
}