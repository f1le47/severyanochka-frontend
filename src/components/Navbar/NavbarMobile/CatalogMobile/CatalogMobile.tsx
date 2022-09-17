import s from './CatalogMobile.module.scss';
import {ReactComponent as Burger} from 'assets/img/burger-triple-line.svg'
import { useState } from 'react';
import { useAppSelector } from 'hooks/redux';
import { NavLink } from 'react-router-dom';

const CatalogMobile = () => {

  const [isVisible, setIsVisible] = useState(false)

  const {categories} = useAppSelector(state => state.categories)

  return (
    <div className={s.catalog}>
      <div 
        className={s.burger}
        onClick={() => setIsVisible(prev => !prev)}
      >
        <Burger className={s.burger__icon} />
        <span className={s.burger__text}>Каталог</span>
      </div>
      {isVisible && (
        <ul className={s.categories}>
          {categories.map(category => {
            return (
              <NavLink 
                to={`/catalog/${category.id}`} 
                key={category.id} 
                className={s.category}
                onClick={() => setIsVisible(false)}
              >
                {category.name}
              </NavLink>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default CatalogMobile