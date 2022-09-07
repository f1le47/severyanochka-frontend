import { useLocation, useNavigate } from 'react-router-dom'
import { ITiles } from './ITiles'
import s from './Tiles.module.scss'

const Tiles = ({categories}: ITiles) => {

  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (categoryId: number) => {
    navigate(`${location.pathname}/${categoryId}`)
  }

  return (
    <div className={s.tiles}>
      {categories.map(category => {
        const imgSrc = `${process.env.REACT_APP_STATIC_URL}/${category.img}`
        return (
          <div className={s.tile} onClick={() => handleClick(category.id)}>
            <div className={s.gradient}>
              <img className={s.img} src={imgSrc} alt="#" />
            </div>
            <span className={s.name}>{category.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Tiles