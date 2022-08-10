import ReturnBtn from "commons/AuthWindows/AuthRedirectBtns/ReturnBtn/ReturnBtn"
import AuthWindowWrapper from "commons/AuthWindows/AuthWindowWrapper"
import Input from "commons/Inputs/Input/Input"
import RequestCodeAgain from "commons/RequestCodeAgain/RequestCodeAgain"
import { useActions } from "hooks/redux"
import { useState } from "react"
import codeValidator from "utils/ValidationSchemas/codeValidator"
import { IRestoreWindow2 } from "./IRestoreWindow2"

const RestoreWindow2 = ({phoneNumber, setRestoreStage}: IRestoreWindow2) => {

  const [code, setCode] = useState('')

  const [isTouched, setIsTouched] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const {confirmCode} = useActions()
  const handleSubmit = () => {
    try {
      confirmCode({phoneNumber, code: Number(code)})
      setRestoreStage(3)
    } catch (e) {
      
    }
  }

  return (
    <AuthWindowWrapper
      title="Вход"
      btnText="Подтвердить"
      timer={<RequestCodeAgain phoneNumber={phoneNumber} />}
      isTouched={isTouched}
      isValid={isValid}
      handleSubmit={handleSubmit}
      authRedirectBtns={[<ReturnBtn windowType="restore" />]}
    >
      <Input 
        inputLabel="Код из СМС"
        inputType="code"
        inputVisual="wide"
        setInputValue={setCode}
        setIsTouched={setIsTouched}
        setIsValid={setIsValid}
        yupValidator={codeValidator}
      />
    </AuthWindowWrapper>
  )
}

export default RestoreWindow2