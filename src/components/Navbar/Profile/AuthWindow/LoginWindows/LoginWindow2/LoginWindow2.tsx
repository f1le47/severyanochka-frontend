import RestoreBtn from 'commons/AuthWindows/AuthRedirectBtns/RestoreBtn/RestoreBtn';
import ReturnBtn from 'commons/AuthWindows/AuthRedirectBtns/ReturnBtn/ReturnBtn';
import AuthWindowWrapper from 'commons/AuthWindows/AuthWindowWrapper';
import Input from 'commons/Inputs/Input/Input';
import passwordLoginValidator from 'utils/ValidationSchemas/passwordLoginValidator';
import { useActions } from 'hooks/redux';
import { useState } from 'react';
import { ILoginWindow2 } from './ILoginWindow2';

const LoginWindow2 = ({phoneNumber, setLoginStage, setIsAuthWindowVisible}: ILoginWindow2) => {

  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const [password, setPassword] = useState('')

  const {login} = useActions()
  const handleSubmit = () => {
    login({phoneNumber, password}).then((status: number) => {
      if (status === 200) {
        setLoginStage(-1)
        setIsAuthWindowVisible(false)
      }
    }) 
  }

  return (
    <AuthWindowWrapper
      title="Вход"
      btnText="Подвердить"
      authRedirectBtns={[<ReturnBtn windowType='login' />, <RestoreBtn />]}
      isValid={isValid}
      handleSubmit={handleSubmit}
      isTouched={isTouched}
    >
      <Input 
        inputLabel="Пароль"
        inputType="password"
        inputVisual="wide"
        setIsValid={setIsValid}
        setInputValue={setPassword}
        setIsTouched={setIsTouched}
        yupValidator={passwordLoginValidator}
      />
    </AuthWindowWrapper>
  );
};

export default LoginWindow2;