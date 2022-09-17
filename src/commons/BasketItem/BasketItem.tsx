import s from './BasketItem.module.scss'
import {ReactComponent as MinusBtn} from 'assets/img/minus.svg'
import {ReactComponent as PlusBtn} from 'assets/img/plus.svg'
import formattingPrice from 'utils/formattingPrice'
import { IBasketItem } from './IBasketItem'
import { useActions } from 'hooks/redux'

const BasketItem = ({basketProduct}: IBasketItem) => {

  const {name, price, amount, img, productId} = basketProduct
  const discount = basketProduct.discount
  const imgSrc = `${process.env.REACT_APP_STATIC_URL}/${img}`

  const {addBasketProduct, removeBasketProduct} = useActions()

  const handleMinus = () => {
    removeBasketProduct({productId})
  }
  const handlePlus = () => {
    addBasketProduct({productId})
  }

  return (
    <div className={s.card}>
      <div className={s.img}>
        <img className={s.img__product} src={imgSrc} alt="" />
      </div>
      <div className={s.info}>
        <span className={s.name}>{name}</span>
        <div className={s.price}>
          {discount && (
            <div className={s.priceWithCard}>
              <span className={s.price__bold}>{formattingPrice(discount.priceWithCard)}</span>
              <span className={s.price__info}>С картой</span>
            </div>
          )}
          <div className={s.priceDefault}>
            <span className={discount ? s.price__default : `${s.price__default} ${s.price__default_bold}`}>{formattingPrice(price)}</span>
            {discount && (
              <span className={s.price__info}>Обычная</span>
            )}
          </div>
          <span className={s.apiece}>за шт.</span>
          {discount && (
            <span className={s.discount}>{`-${discount.discount}%`}</span>
          )}
        </div>
      </div>
      <div className={s.priceAndAmount}>
        <div className={s.amountBtns}>
          <MinusBtn onClick={handleMinus} className={s.minusBtn} />
          <span className={s.amount}>{amount}</span>
          <PlusBtn onClick={handlePlus} className={s.plusBtn} />
        </div>
        <div className={s.totalPrice}>
          {discount && (
            <span className={s.totalPrice__bold}>{formattingPrice(Math.floor((discount.priceWithCard * amount) * 100) / 100)}</span>
          )}
          <span className={discount ? s.totalPrice__crossout : `${s.totalPrice__crossout} ${s.totalPrice__crossout_bold}`}>
            {formattingPrice(Math.floor((price * amount) * 100) / 100)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BasketItem