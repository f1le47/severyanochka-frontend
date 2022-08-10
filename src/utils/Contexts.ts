import { registration } from './../http/userApi';
import { createContext } from 'react';

interface IProfileContext {
  isAuthWindowVisible: boolean,
  setIsAuthWindowVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface IAuthWindowContext {
  loginStage: number
  registrationStage: number
  restoreStage: number
  fromStage: number
  setLoginStage: React.Dispatch<React.SetStateAction<number>>
  setRegistrationStage: React.Dispatch<React.SetStateAction<number>>
  setFromStage: React.Dispatch<React.SetStateAction<number>>,
  setRestoreStage: React.Dispatch<React.SetStateAction<number>>,
}

export const ProfileContext = createContext<IProfileContext>({isAuthWindowVisible: false, setIsAuthWindowVisible: () => false})
export const AuthWindowContext = createContext<IAuthWindowContext>({
  loginStage: 1,
  registrationStage: -1,
  restoreStage: -1,
  fromStage: -1,
  setLoginStage: () => 0, 
  setRegistrationStage: () => 0,
  setFromStage: () => 0,
  setRestoreStage: () => 0,
})