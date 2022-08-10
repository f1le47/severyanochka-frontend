import { useContext } from 'react';
import { AuthWindowContext } from 'utils/Contexts';
import s from './LoginBtn.module.scss'

const LoginBtn = () => {

  const {setRegistrationStage, setLoginStage} = useContext(AuthWindowContext)

  return (
    <>
      <button className={s.loginBtn} onClick={() => {
        setRegistrationStage(-1)
        setLoginStage(1)
      }}>Вход</button>
    </>
  );
};

export default LoginBtn;