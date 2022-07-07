import s from './LoginWindow.module.scss'
import warning from '../../../assets/img/formikErrors/warning.svg';
import {ReactComponent as Close} from '../../../assets/img/loginWindow/close.svg';
import { NavLink } from 'react-router-dom';
import { LoginWindowFormType, LoginWindowType } from '../../../types/ComponentsTypes/NavbarTypes/LoginWindowTypes/LoginWindowTypes';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../../../variables.scss';

const LoginWindow = ({isLoginWindowVisible, setIsLoginWindowVisible}: LoginWindowType) => {

  const {values, errors, handleSubmit, handleChange, touched} = useFormik<LoginWindowFormType>({
    initialValues: {
      phone: undefined
  },
  validationSchema: Yup.object({
    phone: Yup.string().min(10, 'Минимальное количество символов 10.').required('Это поле обязательно для ввода')
  }),
  onSubmit: () => {}
  })

  return <>
    { isLoginWindowVisible ? (
      <div className={s.loginWindow}>
      <div className={s.loginWindowContainer}>
        {touched && errors.phone ? (
          <div className={s.loginWindowContainerError}>
            <img src={warning} alt="!" className={s.loginWindowContainerError__icon} />
            <span className={s.loginWindowContainerError__text}>{errors.phone}</span>
          </div>
        ) : <></>}
        <Close className={s.loginWindowContainer__close} onClick={() => {
          setIsLoginWindowVisible(false)
          console.log(errors.phone)
        }} />
        <h1 className={s.loginWindowContainer__title}>Вход</h1>
        <div className={s.loginWindowContainerInput}>
          <span className={s.loginWindowContainerInput__text}>Телефон</span>
          <input type="number" className={s.loginWindowContainerInput__input}
                 name="phone"
                 onChange={handleChange}
                 value={values.phone}/>
        </div>
        { errors.phone ? <button type='submit' onSubmit={() => handleSubmit} className={s.loginWindowContainer__btn} style={{color: '#FF6633', backgroundColor: '#FCD5BA'}}>
          Вход
        </button> 
        : <button type='submit' onSubmit={() => handleSubmit} className={s.loginWindowContainer__btn} style={{backgroundColor: '#FF6633', color: '#ffffff'}}>Вход</button>}
        <div className={s.loginWindowContainerNav}>
          <NavLink to="/register" className={s.loginWindowContainerNav__registerBtn}>Регистрация</NavLink>
          <NavLink to="/restore" className={s.loginWindowContainerNav__remoteNav}>Забыли пароль?</NavLink>
        </div>
      </div>
    </div>
    ) : ('')}
  </>
}

export default LoginWindow