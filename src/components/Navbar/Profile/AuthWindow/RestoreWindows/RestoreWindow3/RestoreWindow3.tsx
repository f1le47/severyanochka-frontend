import ReturnBtn from "commons/AuthWindows/AuthRedirectBtns/ReturnBtn/ReturnBtn"
import AuthWindowWrapper from "commons/AuthWindows/AuthWindowWrapper"
import Input from "commons/Inputs/Input/Input"
import { useActions } from "hooks/redux"
import { useState } from "react"
import confirmPasswordRegistrationValidator from "utils/ValidationSchemas/confirmPasswordRegistrationValidator"
import passwordLoginValidator from "utils/ValidationSchemas/passwordLoginValidator"
import { IRestoreWindow3 } from "./IRestoreWindow3"

const RestoreWindow3 = ({phoneNumber, setRestoreStage, setIsAuthWindowVisible}: IRestoreWindow3) => {

  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const {newPassword} = useActions()
  const handleSubmit = () => {
      newPassword({phoneNumber, password}).then((status: number) => {
        if (status === 200) {
          setRestoreStage(-1)
          setIsAuthWindowVisible(false)
        }
      })
  }

  return (
    <AuthWindowWrapper
      title="Новый пароль"
      btnText="Подтвердить"
      isValid={isValid}
      isTouched={isTouched}
      handleSubmit={handleSubmit}
      authRedirectBtns={[<ReturnBtn windowType="restore" />]}
    >
      <Input 
        inputLabel="Пароль"
        inputType="password"
        inputVisual="wide"
        setIsTouched={setIsTouched}
        setIsValid={setIsValid}
        setInputValue={setPassword}
        yupValidator={passwordLoginValidator}
      />
      <Input 
        inputLabel="Подтверждения пароля"
        inputType="password"
        inputVisual="wide"
        setIsTouched={setIsTouched}
        setIsValid={setIsValid}
        setInputValue={setConfirmPassword}
        yupValidator={confirmPasswordRegistrationValidator(password)}
      />
    </AuthWindowWrapper>
  )
}

export default RestoreWindow3