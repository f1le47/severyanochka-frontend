import s from './Card.module.scss'
import info from 'assets/img/info.svg'
import cart from 'assets/img/cart32.svg'
import {ReactComponent as SemiCircle} from 'assets/img/semi-circle-bottom.svg'
import notifyOn from 'assets/img/notify-on.svg'
import { ICard } from './ICard'
import formattingPrice from 'utils/formattingPrice'
import { useActions, useAppSelector } from 'hooks/redux'
import {ReactComponent as MinusBtn} from 'assets/img/minus.svg'
import {ReactComponent as PlusBtn} from 'assets/img/plus.svg'

const Card = ({product}: ICard) => {

  const {id, img, weight, discount, price, brand} = product
  const imgSrc = `${process.env.REACT_APP_STATIC_URL}/${img}`

  let bonuses = 0
  if (!!discount) {
    bonuses = Math.floor(discount.priceWithCard / 10)
  } else {
    bonuses = Math.floor(price / 10)
  }

  const {addNewBasketProduct, removeBasketProduct, addBasketProduct} = useActions()
  const handleAddBasket = () => {
    addNewBasketProduct({productId: id})
  }
  const handleMinusBtn = () => {
    removeBasketProduct({productId: id})
  }
  const handlePlusBtn = () => {
    addBasketProduct({productId: id})
  }

  const basketProducts = useAppSelector(state => state.basket.basketProducts)
  let alreadyInBasket = false
  let amountBasketProducts = 0
  basketProducts.forEach(basketProduct => {
    if (basketProduct.productId === id) {
      alreadyInBasket = true
      amountBasketProducts = basketProduct.amount
    }
  })

  return (
    <div className={s.card}>
      <div className={s.miniatures}>
        <img src={imgSrc} alt="#" className={s.miniature} />
        <img src={imgSrc} alt="#" className={s.miniature} />
        <img src={imgSrc} alt="#" className={s.miniature} />
        <img src={imgSrc} alt="#" className={s.miniature} />
        <img src={imgSrc} alt="#" className={s.miniature} />
      </div>
      <div className={s.productImg}>
        <img src={imgSrc} alt="" className={s.img} />
        {!!discount && (
          <span className={s.discount}>{`-${discount.discount}%`}</span>
        )}
      </div>
      <div className={s.cardInfo}>
        <div className={s.prices}>
          <div className={s.default}>
            <span className={!!discount ? s.default__price : s.withCard__price}>{formattingPrice(price)}</span>
            {!!discount && (
              <span className={s.price__info}>Обычная цена</span>
            )}
          </div>
          {!!discount && (
            <div className={s.withCard}>
              <span className={s.withCard__price}>{formattingPrice(discount.priceWithCard)}</span>
              <div className={s.withCard__info}>
                <span className={s.price__info}>С картой Северяночки</span>
                <img className={s.withCard__info__icon} src={info} alt="" />
              </div>
            </div>
          )}
        </div>
        {alreadyInBasket ? (
          <div className={s.regulationBtns}>
            <MinusBtn 
              className={s.regulationBtns__btn} 
              onClick={handleMinusBtn}
            />
            <span className={s.regulationBtns__amount}>{amountBasketProducts}</span>
            <PlusBtn 
              className={s.regulationBtns__btn} 
              onClick={handlePlusBtn}
            />
          </div>
        ) : (
          <div 
            className={s.cartBtn}
            onClick={handleAddBasket}
          >
            <img src={cart} alt="#" className={s.cartBtn__icon} />
            <button className={s.cartBtn__btn}>В корзину</button>
          </div>
        )}
        <div className={s.bonuses}>
          <SemiCircle className={s.bonuses__icon} />
          <div className={s.bonusesText}>
            <span className={s.bonusesText__text}>Вы получите</span>
            <span className={s.bonusesText__amount}>{`${bonuses} бонусов`}</span>
          </div>
        </div>
        <div className={s.notify}>
          <img src={notifyOn} alt="" className={s.notify__icon} />
          <span className={s.notify__text}>Уведомить о снижении цены</span>
        </div>
        <div className={s.productInfo}>
          <div className={s.line}>
            <span className={s.type}>Бренд</span>
            <div className={s.info}>{brand.name}</div>
          </div>
          <div className={s.line}>
            <span className={s.type}>Страна производителя</span>
            <div className={s.info}>Россия</div>
          </div>
          <div className={s.line}>
            <span className={s.type}>Упаковка</span>
            <div className={s.info}>{`${weight} г`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card