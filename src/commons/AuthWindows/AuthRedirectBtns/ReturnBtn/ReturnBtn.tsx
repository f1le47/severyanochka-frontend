import s from './ReturnBtn.module.scss'
import arrowBack from 'assets/img/authWindow/arrowBack.svg'
import { AuthWindowContext } from 'utils/Contexts';
import { useContext } from 'react';
import { IReturnBtn } from './IReturnBtn';

const ReturnBtn = ({windowType}: IReturnBtn) => {

  const {
    setLoginStage, 
    setRegistrationStage, 
    restoreStage, 
    setRestoreStage, 
    fromStage
  } = useContext(AuthWindowContext)

  const handleClick = () => {
    if (windowType === 'login') {
      setLoginStage(prev => prev - 1)
    } else if (windowType === 'registration') {
      setRegistrationStage(prev => prev - 1)
    } else if (windowType === 'restore') {
      if (restoreStage === 1) {
        setRestoreStage(-1)
        setLoginStage(fromStage)
      } else {
        setRestoreStage(prev => prev - 1)
      }
    }
  }

  return (
    <div className={s.returnBtn}>
      <img className={s.returnBtn__icon} src={arrowBack} alt="<" />
      <button className={s.returnBtn__btn} onClick={handleClick}>Вернуться</button>
    </div>
  );
};

export default ReturnBtn;