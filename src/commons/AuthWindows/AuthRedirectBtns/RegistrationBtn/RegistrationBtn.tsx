import { useContext } from 'react';
import { AuthWindowContext } from 'utils/Contexts';
import s from './RegistrationBtn.module.scss'

const RegistrationBtn = () => {

  const {setLoginStage, setRegistrationStage} = useContext(AuthWindowContext)

  return (
    <>
      <button className={s.registrationBtn} onClick={() => {
        setLoginStage(-1)
        setRegistrationStage(1)
      }}>Регистрация</button>
    </>
  );
};

export default RegistrationBtn;