import { useAppSelector } from 'hooks/redux'
import { NavLink, useNavigate } from 'react-router-dom'
import s from './Catalog.module.scss'
import {ReactComponent as Burger} from 'assets/img/burger-triple-line.svg'
import {v4 as uuid} from 'uuid'
import { useState } from 'react'

const Catalog = () => {

  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigate()

  const categories = useAppSelector(state => state.categories.categories)

  return (
    <div 
      className={s.catalog}
      onMouseLeave={() => setIsVisible(false)}
    >
      <NavLink 
        className={s.btn} 
        to='/catalog'
        onMouseEnter={() => setIsVisible(true)}
      >
        <Burger className={s.burger} />
        <span className={s.btn__text}>Каталог</span>
      </NavLink>
      <div className={s.middleLayer}></div>
      {isVisible && (
        <div className={s.categories}
        >
          {categories.map(category => {
            return (
              <span 
                key={uuid()} 
                className={s.category}
                onClick={() => {
                  navigate('catalog/' + category.id)
                }}
              >
                {category.name}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Catalog