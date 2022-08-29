import BasketItem from 'commons/BasketItem/BasketItem'
import s from './BasketItems.module.scss'
import { IBasketItems } from './IBasketItems'

const BasketItems = ({basketProducts}: IBasketItems) => {

  return (
    <div className={s.basketItems}>
      {basketProducts.length > 0 ?
      (basketProducts.map(basketProduct => {
        return (
          <div className={s.basketItem}>
            <BasketItem basketProduct={basketProduct} />
          </div>
        )
      }))
      :
      (<span className={s.empty}>Здесь пока что ничего нет</span>)
      }
    </div>
  )
}

export default BasketItems