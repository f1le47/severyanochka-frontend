import s from './Card.module.scss'
import {ReactComponent as Favorite} from 'assets/img/card/favorite.svg'
import {ReactComponent as Rate} from 'assets/img/card/rate.svg'
import { ICard } from './ICard'

const Card = ({product}: ICard) => {

  const {name, price, price_with_card, rating, img, discount} = product
  const imgSrc = `${process.env.REACT_APP_STATIC_URL}/${img}`

  const rest = 5 - rating
  const rateArr = []
  for (let i = 0; i < rating; i++) {
    rateArr.push(1)
  }
  for (let i = 0; i < rest; i++) {
    rateArr.push(0)
  }

  return (
    <div className={s.card}>
      <div className={s.image}>
        <Favorite className={s.favorite} />
        <img src={imgSrc} alt="#" className={s.productImage} />
        {discount && <span className={s.discount}>{`-${discount}%`}</span>}
      </div>
      <div className={s.block}>
        <div className={s.count}>
          <div className={s.withCard}>
            <span className={s.withCard__price}>{`${price_with_card} ₽`}</span>
            <span className={s.countInfo}>С картой</span>
          </div>
          <div className={s.default}>
            <span className={s.default__price}>{`${price} ₽`}</span>
            <span className={s.countInfo}>Обычная</span>
          </div>
        </div>
        <p className={s.productName}>{name}</p>
        <div className={s.rating}>
          {rateArr.map(isActive => {
            return (
              <Rate className={isActive === 1 ? `${s.rate} ${s.rate_active}` : s.rate} />
            )
          })}
        </div>
        <button className={s.button}>В корзину</button>
      </div>
    </div>
  )
}

export default Card