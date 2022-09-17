import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import logoIcon from 'assets/img/logotype/logo-icon.svg';
import logoText from 'assets/img/logotype/logo-text.svg';
import ProductNavigation from './ProductNavigation/ProductNavigation';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import Profile from './Profile/Profile';
import NavbarMobile from './NavbarMobile/NavbarMobile';

const Navbar = () => {

  const screenWidth = window.screen.width

  return (
    screenWidth < 768 ? (
      <NavbarMobile />
    ) :
    (
      <div className={s.navbar}>
        <div className={s.container}>
          <NavLink to='/' className={s.logo}>
            <img src={logoIcon} alt="^ ^" className={s.logo__icon} />
            <img src={logoText} alt="СЕВЕРЯНОЧКА" className={s.logo__text} />
          </NavLink>
          <ProductNavigation />
          <NavigationLinks />
          <Profile />
        </div>
      </div>
    )
  )
}

export default Navbar;