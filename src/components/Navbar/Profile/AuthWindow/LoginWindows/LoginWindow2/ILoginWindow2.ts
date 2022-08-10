export interface ILoginWindow2 {
  phoneNumber: string
  setLoginStage: React.Dispatch<React.SetStateAction<number>>
  setIsAuthWindowVisible: React.Dispatch<React.SetStateAction<boolean>>
}