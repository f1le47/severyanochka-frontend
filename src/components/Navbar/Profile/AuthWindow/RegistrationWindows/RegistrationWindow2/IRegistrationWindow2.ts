export interface IRegistrationWindow2 {
  phoneNumber: string
  setIsAuthWindowVisible: React.Dispatch<React.SetStateAction<boolean>>
  setRegistrationStage: React.Dispatch<React.SetStateAction<number>>
}