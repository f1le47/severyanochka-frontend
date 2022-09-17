import { NavLink } from 'react-router-dom';
import s from './NavbarMobile.module.scss';
import logoIcon from 'assets/img/logotype/logo-icon.svg';
import loupe from 'assets/img/searchString/loupe.svg';
import CatalogMobile from './CatalogMobile/CatalogMobile';
import {ReactComponent as Favorite} from 'assets/img/navbarButtons/favorite.svg'
import {ReactComponent as Orders} from 'assets/img/navbarButtons/orders.svg'
import {ReactComponent as Cart} from 'assets/img/navbarButtons/cart.svg'
import NavigationButton from 'commons/NavigationButton/NavigationButton';
import Profile from './Profile/Profile';

const NavbarMobile = () => {
  return (
    <div className={s.navbar}>
      <div className={s.topLine}>
        <NavLink to='/' className={s.logo}>
          <img src={logoIcon} alt="^ ^" className={s.logo__icon} />
        </NavLink>
        <div className={s.navString}>
          <input type="text"
                className={s.navString__input}
                placeholder="Найти товар" />
          <img src={loupe} alt="🔍︎" className={s.navString__img} />
        </div>
      </div>
      <div className={s.bottomLine}>
        <CatalogMobile />
        <NavigationButton 
          Icon={Favorite}
          link="/favorite"
          text="Избранное"
        />
        <NavigationButton 
          Icon={Orders}
          link="/orders"
          text="Заказы"
        />
        <NavigationButton 
          Icon={Cart}
          link="/basket"
          text="Корзина"
        />
        <Profile />
      </div>
    </div>
  )
}

export default NavbarMobile