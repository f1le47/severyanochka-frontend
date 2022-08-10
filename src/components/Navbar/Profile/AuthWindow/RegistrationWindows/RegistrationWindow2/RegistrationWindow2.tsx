import ReturnBtn from 'commons/AuthWindows/AuthRedirectBtns/ReturnBtn/ReturnBtn';
import AuthWindowWrapper from 'commons/AuthWindows/AuthWindowWrapper';
import Input from 'commons/Inputs/Input/Input';
import RequestCodeAgain from 'commons/RequestCodeAgain/RequestCodeAgain';
import { useActions } from 'hooks/redux';
import { useState } from 'react';
import codeValidator from 'utils/ValidationSchemas/codeValidator';
import { IRegistrationWindow2 } from './IRegistrationWindow2';

const RegistrationWindow2 = ({phoneNumber, setIsAuthWindowVisible, setRegistrationStage}: IRegistrationWindow2) => {

  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const [code, setCode] = useState('')

  const {confirmCode} = useActions()
  const handleSubmit = () => {
      confirmCode({phoneNumber, code: Number(code)}).then((status: number) => {
        if (status === 200) {
          setRegistrationStage(-1)
          setIsAuthWindowVisible(false)
        }
      })
  }

  return (
    <AuthWindowWrapper
      authRedirectBtns={[<ReturnBtn windowType='registration' />]}
      btnText='Подтвердить'
      title='Регистрация'
      handleSubmit={handleSubmit}
      isTouched={isTouched}
      isValid={isValid}
      timer={<RequestCodeAgain phoneNumber={phoneNumber} />}
    >
      <Input 
        inputLabel='Код из СМС'
        inputType='code'
        inputVisual='wide'
        setInputValue={setCode}
        setIsTouched={setIsTouched}
        setIsValid={setIsValid}
        yupValidator={codeValidator}
      />
    </AuthWindowWrapper>
  );
};

export default RegistrationWindow2;