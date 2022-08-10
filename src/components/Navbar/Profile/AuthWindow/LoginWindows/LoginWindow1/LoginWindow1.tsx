import RegistrationBtn from 'commons/AuthWindows/AuthRedirectBtns/RegistrationBtn/RegistrationBtn';
import RestoreBtn from 'commons/AuthWindows/AuthRedirectBtns/RestoreBtn/RestoreBtn';
import AuthWindowWrapper from 'commons/AuthWindows/AuthWindowWrapper';
import Input from 'commons/Inputs/Input/Input';
import phoneValidator from 'utils/ValidationSchemas/phoneValidator';
import { useState } from 'react';
import { ILoginWindow1 } from './ILoginWindow1';

const LoginWindow1 = ({setPhoneNumber, setLoginStage}: ILoginWindow1) => {
  const [inputValue, setInputValue] = useState('')

  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const handleSubmit = () => {
    setPhoneNumber(inputValue)
    setLoginStage(2)
  }
  return (
    <AuthWindowWrapper 
      btnText="Вход"
      title="Вход"
      isValid={isValid}
      isTouched={isTouched}
      handleSubmit={handleSubmit}
      authRedirectBtns={[<RegistrationBtn />, <RestoreBtn />]} 
    >
      <Input
        inputType="text"
        inputLabel="Телефон"
        setIsValid={setIsValid}
        setIsTouched={setIsTouched}
        inputVisual="wide"
        setInputValue={setInputValue}
        yupValidator={phoneValidator} 
      />
    </AuthWindowWrapper>
  );
};

export default LoginWindow1;