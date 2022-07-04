import s from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

import logoIcon from '../../assets/img/logotype/logo-icon.svg';
import logoText from '../../assets/img/logotype/logo-text.svg';
import burgerLine from '../../assets/img/burger-line.svg';
import loupe from '../../assets/img/searchString/loupe.svg';
import {ReactComponent as Favorite} from '../../assets/img/navbarButtons/favorite.svg';
import {ReactComponent as Orders} from '../../assets/img/navbarButtons/orders.svg';
import {ReactComponent as Cart} from '../../assets/img/navbarButtons/cart.svg';
import login from '../../assets/img/loginBtn/login.svg';
import { useState } from 'react';
import { NavbarType } from '../../types/NavbarTypes/NavbarTypes';
import defaultAvatar from '../../assets/img/profile/defaultAva.svg';
import markdown from '../../assets/img/profile/markdown.svg';
import markup from '../../assets/img/profile/markup.svg';

const Navbar = ({avatar, isAuth, name}: NavbarType) => {
 
  const [isDropDownCategoryVisible, setisDropDownCategoryVisible] = useState(false);
  const [isDropDownProfileVisible, setIsDropDownProfileVisible] = useState(false);

  let avatarImage = ''

  debugger
  if (!avatar) {
    avatarImage = defaultAvatar;
  } else {
    avatarImage = avatar;
  }

  return <div className={s.closeDropDown} onClick={() => setisDropDownCategoryVisible(false)}>
    <div className={s.navbar}>
      <div className={s.container}>
        <NavLink to='/' className={s.logo}>
          <img src={logoIcon} alt="^ ^" className={s.logo__icon} />
          <img src={logoText} alt="СЕВЕРЯНОЧКА" className={s.logo__text} />
        </NavLink>
        <div className={s.search}>
          <div className={s.searchCatalog} onClick={(e) => {
            e.stopPropagation()
            setisDropDownCategoryVisible(!isDropDownCategoryVisible)
          }}>
            <div className={s.searchCatalogBurger}>
              <img src={burgerLine} alt="-" className={s.searchCatalogBurger__line} />
              <img src={burgerLine} alt="-" className={s.searchCatalogBurger__line} />
              <img src={burgerLine} alt="-" className={s.searchCatalogBurger__line} />
            </div>
            <span className={s.searchCatalog__text}>Каталог</span>
          </div>
          { isDropDownCategoryVisible ? (<div className={s.searchCatalogDrop} onClick={(e) => e.stopPropagation()}>
              <span className={s.searchCatalogDrop__link}>Хлебобулочные изделия</span>
              <span className={s.searchCatalogDrop__link}>Молоко, сыр, яйцо</span>
              <span className={s.searchCatalogDrop__link}>Фрукты и овощи</span>
              <span className={s.searchCatalogDrop__link}>Замороженные продукты</span>
              <span className={s.searchCatalogDrop__link}>Напитки</span>
              <span className={s.searchCatalogDrop__link}>Кондитерские изделия</span>
              <span className={s.searchCatalogDrop__link}>Чай, кофе</span>
              <span className={s.searchCatalogDrop__link}>Бакалея</span>
              <span className={s.searchCatalogDrop__link}>Здоровое питание</span>
              <span className={s.searchCatalogDrop__link}>Зоотовары</span>
              <span className={s.searchCatalogDrop__link}>Детское питание</span>
              <span className={s.searchCatalogDrop__link}>Мясо, птица, колбаса</span>
              <span className={s.searchCatalogDrop__link}>Непродовольственные товары</span>
            </div>) : <></> }
          <div className={s.searchString}>
            <input type="text"
                  className={s.searchString__input}
                  placeholder="Найти товар" />
            <img src={loupe} alt="🔍︎" className={s.searchString__img} />
          </div>
        </div>
        <div className={s.links}>
          <NavLink to='/favorite' className={s.linksBtn}>
            {({isActive}) => (
              <>
                <Favorite className={isActive ? `${s.linksBtn__icon} ${s.linksBtn__icon_active}` : `${s.linksBtn__icon}`} />
                <span className={isActive ? `${s.linksBtn__text} ${s.linksBtn__text_active}` : `${s.linksBtn__text}`}>Избранное</span>
              </>
            )}
          </NavLink>
          <NavLink to='/orders' className={s.linksBtn}>
            {({isActive}) => (
              <>
                <Orders className={isActive ? `${s.linksBtn__icon} ${s.linksBtn__icon_active}` : `${s.linksBtn__icon}`} />
                <span className={isActive ? `${s.linksBtn__text} ${s.linksBtn__text_active}` : `${s.linksBtn__text}`}>Заказы</span>
              </>
            )}
          </NavLink>
          <NavLink to='/cart' className={s.linksBtn}>
            {({isActive}) => (
              <>
                <Cart className={isActive ? `${s.linksBtn__icon} ${s.linksBtn__icon_active}` : `${s.linksBtn__icon}`} />
                <span className={isActive ? `${s.linksBtn__text} ${s.linksBtn__text_active}` : `${s.linksBtn__text}`}>Корзина</span>
              </>
            )}
          </NavLink>
        </div>
        { isAuth ? (
          <div className={s.profile} onClick={() => setIsDropDownProfileVisible(!isDropDownProfileVisible)}>
            <div className={s.profileLine}>
              <div className={s.profileLineInfo}>
                <img src={avatarImage} alt="x" className={s.profileLineInfo__img} />
                <span className={s.profileLineInfo__name}>{name}</span>
              </div>
              <img src={isDropDownProfileVisible ? markup : markdown} alt="˅" className={s.profileLine__mark} />
            </div>
            { isDropDownProfileVisible ? (
          <div className={s.profileDrop}>
            <div className={s.profileDropBtn}>
              <span className={s.profileDropBtn__text}>Профиль</span>
              <img src={markdown} alt="ᐱ" className={s.profileDropBtn__markup} />
            </div>
            <div className={s.profileDropBtn}>
              <span className={s.profileDropBtn__text}>Выйти</span>
            </div>
          </div>
        ) : (<></>) }
          </div>
        ) : 
        (<div className={s.login}>
          <span className={s.login__text}>Войти</span>
          <img src={login} alt="log" className={s.login__img} />
        </div>) }
      </div>
    </div>
  </div>
}

export default Navbar;