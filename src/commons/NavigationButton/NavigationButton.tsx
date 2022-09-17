import s from './NavigationButton.module.scss';
import { NavLink } from 'react-router-dom';
import { INavigationButton } from './INavigationButton';

const NavigationButton = ({Icon, text, link}: INavigationButton) => {
  return (
    <NavLink to={link} className={s.button}>
      {({isActive}) => (
        <>
          <Icon className={isActive ? `${s.icon} ${s.icon_active}` : s.icon} />
          <span className={isActive ? `${s.text} ${s.text_active}` : s.text}>{text}</span>
        </>
      )}
    </NavLink>
  )
}

export default NavigationButton