import { useContext } from 'react';
import { AuthWindowContext } from 'utils/Contexts';
import s from './RestoreBtn.module.scss'

const RestoreBtn = () => {

  const {setFromStage, setLoginStage, loginStage, setRestoreStage} = useContext(AuthWindowContext)

  const handleClick = () => {
      setFromStage(loginStage)
      setLoginStage(-1)
      setRestoreStage(1)
  }

  return (
    <>
      <button className={s.restoreBtn} onClick={handleClick}>Забыли пароль?</button>
    </>
  );
};

export default RestoreBtn;