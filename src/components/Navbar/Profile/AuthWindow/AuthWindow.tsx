import s from './AuthWindow.module.scss'
import LoginWindow1 from "./LoginWindows/LoginWindow1/LoginWindow1"
import LoginWindow2 from "./LoginWindows/LoginWindow2/LoginWindow2"
import RegistrationWindow1 from "./RegistrationWindows/RegistrationWindow1/RegistrationWindow1"
import RestoreWindow1 from "./RestoreWindows/RestoreWindow1/RestoreWindow1"
import { useState } from "react"
import { AuthWindowContext } from 'utils/Contexts'
import RegistrationWindow2 from './RegistrationWindows/RegistrationWindow2/RegistrationWindow2'
import RestoreWindow2 from './RestoreWindows/RestoreWindow2/RestoreWindow2'
import { IAuthWindow } from './IAuthWindow'
import RestoreWindow3 from './RestoreWindows/RestoreWindow3/RestoreWindow3'

const AuthWindow = ({setIsAuthWindowVisible}: IAuthWindow) => {

  const [loginStage, setLoginStage] = useState(1)
  const [restoreStage, setRestoreStage] = useState(-1)
  const [registrationStage, setRegistrationStage] = useState(-1)

  const [fromStage, setFromStage] = useState(-1)

  const [phoneNumber, setPhoneNumber] = useState('')

  return <AuthWindowContext.Provider value={
    {
      setLoginStage, 
      setRegistrationStage, 
      setFromStage,
      loginStage,
      setRestoreStage,
      registrationStage,
      restoreStage,
      fromStage
    }
  }>
  <div className={s.background}>
    {loginStage === 1 && (
      <LoginWindow1 
        setLoginStage={setLoginStage} 
        setPhoneNumber={setPhoneNumber} 
      />
    )}
    {loginStage === 2 && (
      <LoginWindow2 
        phoneNumber={phoneNumber}
        setLoginStage={setLoginStage}
        setIsAuthWindowVisible={setIsAuthWindowVisible}
      />
    )}
    {restoreStage === 1 && (
      <RestoreWindow1 
        setRestoreStage={setRestoreStage}
        setInputValue={setPhoneNumber} 
      />
    )}
    {restoreStage === 2 && (
      <RestoreWindow2
        phoneNumber={phoneNumber}
        setRestoreStage={setRestoreStage}
      />
    )}
    {restoreStage === 3 && (
      <RestoreWindow3
        phoneNumber={phoneNumber}
        setRestoreStage={setRestoreStage}
        setIsAuthWindowVisible={setIsAuthWindowVisible}
      />
    )}
    {registrationStage === 1 && (
      <RegistrationWindow1
        setRegistrationStage={setRegistrationStage}
        setInputValue={setPhoneNumber}
      />
    )}
    {registrationStage === 2 && (
      <RegistrationWindow2
        phoneNumber={phoneNumber}
        setRegistrationStage={setRegistrationStage}
        setIsAuthWindowVisible={setIsAuthWindowVisible}
      />
    )}
  </div>
  </AuthWindowContext.Provider>
}

export default AuthWindow