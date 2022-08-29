import s from './NavigationLinks.module.scss'
import { NavLink } from "react-router-dom"
import {ReactComponent as Favorite} from 'assets/img/navbarButtons/favorite.svg';
import {ReactComponent as Orders} from 'assets/img/navbarButtons/orders.svg';
import {ReactComponent as Cart} from 'assets/img/navbarButtons/cart.svg';
import { useAppSelector } from 'hooks/redux';

const NavigationLinks = () => {

  const amountBasketProducts = useAppSelector(state => state.basket.amountBasketProducts)

  return <div className={s.links}>
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
  <NavLink to='/basket' className={s.linksBtn}>
    {({isActive}) => (
      <>
        {!!amountBasketProducts && amountBasketProducts > 0 && (
          <span className={s.amountBasketProducts}>{amountBasketProducts}</span>
        )}
        <Cart className={isActive ? `${s.linksBtn__icon} ${s.linksBtn__icon_active}` : `${s.linksBtn__icon}`} />
        <span className={isActive ? `${s.linksBtn__text} ${s.linksBtn__text_active}` : `${s.linksBtn__text}`}>Корзина</span>
      </>
    )}
  </NavLink>
</div>
}

export default NavigationLinks