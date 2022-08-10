import s from './Profile.module.scss'
import markdown from 'assets/img/profile/markdown.svg';
import markup from 'assets/img/profile/markup.svg';
import defaultAvatar from 'assets/img/profile/defaultAva.svg';
import login from 'assets/img/loginBtn/login.svg';
import ProfileDropDown from './ProfileDropDown/ProfileDropDown';
import { useState } from 'react';
import Modal from 'commons/Modal/Modal';
import AuthWindow from './AuthWindow/AuthWindow';
import { ProfileContext } from 'utils/Contexts';
import { useAppSelector } from 'hooks/redux';
import { IProfile } from './IProfile';

const Profile = ({isDropDownProfileVisible, setIsDropDownProfileVisible}: IProfile) => {

  const [isAuthWindowVisible, setIsAuthWindowVisible] = useState(false)

  const isAuth = useAppSelector(state => state.auth.isAuth)
  const {name} = useAppSelector(state => state.auth.user)

  // FIX IT!!!
  const avatar = false

  let avatarImage = ''
  if (!avatar) {
    avatarImage = defaultAvatar;
  } else {
    avatarImage = avatar;
  }

  return <ProfileContext.Provider value={{isAuthWindowVisible, setIsAuthWindowVisible}}>
    { isAuth ? (
          <div className={s.profile} onClick={() => setIsDropDownProfileVisible(!isDropDownProfileVisible)}>
            <div className={s.profileLine}>
              <div className={s.profileLineInfo}>
                <img src={avatarImage} alt="x" className={s.profileLineInfo__img} />
                <span className={s.profileLineInfo__name}>{name}</span>
              </div>
              <img src={isDropDownProfileVisible ? markup : markdown} alt="˅" className={s.profileLine__mark} />
            </div>
            { isDropDownProfileVisible && <ProfileDropDown />}
        </div>
        ) : 
        (<>
          <div className={s.login} onClick={() => setIsAuthWindowVisible(true)}>
          <span className={s.login__text}>Войти</span>
          <img src={login} alt="log" className={s.login__img} />
          </div>
          {isAuthWindowVisible && <Modal id="login-modal">
                                    <AuthWindow setIsAuthWindowVisible={setIsAuthWindowVisible} />
                                  </Modal>}
        </>
        ) }
  </ProfileContext.Provider>
}

export default Profile