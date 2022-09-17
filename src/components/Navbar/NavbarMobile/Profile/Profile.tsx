import s from './Profile.module.scss'
import defaultAvatar from 'assets/img/profile/defaultAva.svg'

const Profile = () => {

  // FIX AVATARA

  return (
    <div className={s.profile}>
      <img src={defaultAvatar} alt="Аватар профиля" className={s.image} />
    </div>
  )
}

export default Profile