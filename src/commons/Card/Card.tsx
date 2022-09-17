import s from './Card.module.scss'
import {ReactComponent as Favorite} from 'assets/img/card/favorite.svg'
import { ICard } from './ICard'
import formattingProductName from 'utils/formattingProductName'
import { useActions, useAppSelector } from 'hooks/redux'
import {ReactComponent as MinusBtn} from 'assets/img/minus.svg'
import {ReactComponent as PlusBtn} from 'assets/img/plus.svg'
import { useNavigate } from 'react-router-dom'
import Rating from 'commons/Rating/Rating'
import formattingPrice from 'utils/formattingPrice'

const Card = ({product}: ICard) => {

  const {name, price, rating, img, discount, id, category} = product
  const imgSrc = `${process.env.REACT_APP_STATIC_URL}/${img}`

  const navigate = useNavigate()

  const formattedName = formattingProductName(name)

  const {addFavoriteProduct, removeFavoriteProduct, addBasketProduct, removeBasketProduct, addNewBasketProduct} = useActions()
  const {favoriteProductIds} = useAppSelector(state => state.favorite)

  let isFavorited = false
  favoriteProductIds.forEach(favoriteProductId => {
    if (favoriteProductId.productId === id) {
      isFavorited = true
    }
  })

  const handleFavorite = () => {
    if (isFavorited) {
      removeFavoriteProduct({productId: id})
    } else {
      addFavoriteProduct({productId: id})
    }
  }

  const handleBasket = () => {
    addNewBasketProduct({productId: id})
  }
  const handleMinusBtn = () => {
    removeBasketProduct({productId: id})
  }
  const handlePlusBtn = () => {
    addBasketProduct({productId: id})
  }

  const handleImgRedirect = () => {
    navigate(`/catalog/${category.id}/${id}`, {replace: false})
  }

  let alreadyInBasket = false
  let amountBasketProduct = 0
  const basketProducts = useAppSelector(state => state.basket.basketProducts)
  basketProducts.forEach(basketProduct => {
    if (basketProduct.productId === id) {
      alreadyInBasket = true
      amountBasketProduct = basketProduct.amount
    }
  })

  return (
    <div className={s.card}>
      <div className={s.image}>
        <Favorite 
          className={isFavorited ? `${s.favorite} ${s.favorite_active}` : s.favorite}
          onClick={handleFavorite}
        />
        <img 
          src={imgSrc} 
          alt="#" 
          className={s.productImage}
          onClick={handleImgRedirect}
        />
        {discount && <span className={s.discount}>{`-${discount.discount}%`}</span>}
      </div>
      <div className={s.block}>
        <div className={s.count}>
          {discount && (
            <div className={s.withCard}>
              <span className={s.withCard__price}>{`${formattingPrice(discount.priceWithCard)}`}</span>
              <span className={s.countInfo}>С картой</span>
            </div>
          )}
          <div className={s.default}>
            <span className={discount ? s.default__price : s.withCard__price}>{`${formattingPrice(price)}`}</span>
            {discount && <span className={s.countInfo}>Обычная</span>}
          </div>
        </div>
        <p className={s.productName}>{formattedName}</p>
        <div className={s.rating}>
          <Rating rating={rating} />
        </div>
        {alreadyInBasket ? 
        (
          <div className={s.regulationBtns}>
            <MinusBtn onClick={handleMinusBtn} className={s.minusBtn} />
            <span className={s.amountBasketProduct}>{amountBasketProduct}</span>
            <PlusBtn onClick={handlePlusBtn} className={s.plusBtn} />
          </div>
        ) 
        : 
        (
          <div className={s.btn}>
            <button className={s.button} onClick={handleBasket}>В корзину</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card