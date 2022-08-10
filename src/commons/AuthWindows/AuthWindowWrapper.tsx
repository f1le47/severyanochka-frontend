import s from './AuthWindowWrapper.module.scss'
import { memo, useContext } from 'react'; 
import { ReactComponent as Close } from 'assets/img/authWindow/close.svg'
import { ProfileContext } from 'utils/Contexts';
import {ReactComponent as Warning} from 'assets/img/formikErrors/warning.svg';
import { useAppSelector } from 'hooks/redux';
import { IAuthWindowWrapper } from './IAuthWindowWrapper';

const AuthWindowWrapper = ({title, btnText, authRedirectBtns, children, handleSubmit, isValid, isTouched, timer}: IAuthWindowWrapper) => {

  const {setIsAuthWindowVisible} = useContext(ProfileContext)
  const apiError = useAppSelector(state => state.auth.error)

  return (
    <div className={s.authWindowWrapper}>
      <Close className={s.authWindowWrapper__close} onClick={() => setIsAuthWindowVisible(false)} />
      <>
        {apiError && 
          (
            <div className={s.authWindowWrapperError}>
              <Warning className={s.authWindowWrapperError__img} />
              <span className={s.authWindowWrapperError__text}>{apiError}</span>
            </div>
          )
        }
      </>
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