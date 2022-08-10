import s from './AuthWindowWrapper.module.scss'
import { memo, useContext } from 'react'; 
import { ReactComponent as Close } from 'assets/img/authWindow/close.svg'
import { ProfileContext } from 'utils/Contexts';
import { IAuthWindowWrapper } from './IAuthWindowWrapper';

const AuthWindowWrapper = ({title, btnText, authRedirectBtns, children, handleSubmit, isValid, isTouched, timer}: IAuthWindowWrapper) => {

  const {setIsAuthWindowVisible} = useContext(ProfileContext)

  return (
    <div className={s.authWindowWrapper}>
      <Close className={s.authWindowWrapper__close} onClick={() => setIsAuthWindowVisible(false)} />
      <h1 className={s.authWindowWrapper__title}>{title}</h1>
      {children}
      <button 
        className={
          !isTouched || !isValid ?
            s.authWindowWrapper__submitBtn
          :
            `${s.authWindowWrapper__submitBtn} ${s.authWindowWrapper__submitBtn_active}`
        } 
        onClick={handleSubmit}
        disabled={!isTouched || !isValid}
      >
        {btnText}
      </button>
      {timer}
      <div className={s.authWindowWrapperRedirectBtns}>
        {authRedirectBtns.map(Component => Component)}
      </div>
    </div>
  )
}

export default memo(AuthWindowWrapper);