import s from './ProfileDropDown.module.scss'
import markdown from '../../../../assets/img/profile/markdown.svg';
import { useActions } from 'hooks/redux';

const ProfileDropDown = () => {

  const {logout} = useActions()
  const logoutHandler = () => {
    logout()
  }

  return <div className={s.profileDrop}>
    <div className={s.profileDropBtn}>
      <span className={s.profileDropBtn__text}>Профиль</span>
      <img src={markdown} alt="ᐱ" className={s.profileDropBtn__markup} />
    </div>
    <div className={s.profileDropBtn}>
      <span className={s.profileDropBtn__text} onClick={logoutHandler}>Выйти</span>
    </div>
  </div>
}

export default ProfileDropDown