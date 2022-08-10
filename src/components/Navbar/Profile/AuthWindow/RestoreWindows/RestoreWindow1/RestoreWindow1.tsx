import ReturnBtn from "commons/AuthWindows/AuthRedirectBtns/ReturnBtn/ReturnBtn"
import AuthWindowWrapper from "commons/AuthWindows/AuthWindowWrapper"
import Input from "commons/Inputs/Input/Input"
import { useActions } from "hooks/redux"
import { useState } from "react"
import phoneValidator from "utils/ValidationSchemas/phoneValidator"
import { IRestoreWindow1 } from "./IRestoreWindow1"

const RestoreWindow1 = ({setRestoreStage, setInputValue}: IRestoreWindow1) => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const {restorePassword} = useActions()
  const handleSubmit = () => {
    try {
      restorePassword({phoneNumber})
      setInputValue(phoneNumber)
      setRestoreStage(2)
    } catch (e) {

    }
  }

  return (
    <AuthWindowWrapper
      btnText="Отправить СМС"
      title="Вход"
      isTouched={isTouched}
      isValid={isValid}
      handleSubmit={handleSubmit}
      authRedirectBtns={[<ReturnBtn windowType="restore" />]}
    >
      <Input 
        inputLabel="Телефон"
        inputType="text"
        inputVisual="wide"
        setInputValue={setPhoneNumber}
        setIsTouched={setIsTouched}
        setIsValid={setIsValid}
        yupValidator={phoneValidator}
      />
    </AuthWindowWrapper>
  )
}

export default RestoreWindow1