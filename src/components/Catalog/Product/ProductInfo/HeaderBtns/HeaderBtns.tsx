import s from './HeaderBtns.module.scss'
import Rating from 'commons/Rating/Rating'
import share from 'assets/img/share.svg'
import {ReactComponent as Favorite} from 'assets/img/card/favorite.svg' 
import { IHeaderBtns } from './IHeaderBtns'
import { useActions, useAppSelector } from 'hooks/redux'
import formattingQuantitativeText from 'utils/formattingQuantitativeText'

const HeaderBtns = ({rating, ratingsAmount, productId, ratingsRef}: IHeaderBtns) => {

  const favoriteProductIds = useAppSelector(state => state.favorite.favoriteProductIds)
  let isFavorited = false
  favoriteProductIds.forEach(favoriteProductId => {
    if (favoriteProductId.productId === productId) {
      isFavorited = true
    }
  })

  const {removeFavoriteProduct, addFavoriteProduct} = useActions()
  const handleFavorite = () => {
    if (isFavorited) {
      removeFavoriteProduct({productId})
    } else {
      addFavoriteProduct({productId})
    }
  }

  const handleScroll = () => {
    ratingsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={s.btns}>
        <span className={s.vendorCode}>арт. 371431</span>
        <div className={s.ratings}>
          <Rating rating={rating} />
          <span 
            className={s.commentsAmount}
            onClick={handleScroll}
          >
            {`${ratingsAmount} ${formattingQuantitativeText('отзыв', ratingsAmount)}`}
          </span>
        </div>
        <div className={s.share}>
          <img className={s.share__img} src={share} alt="000" />
          <span className={s.share__text}>Поделиться</span>
        </div>
        {isFavorited ? (
          <div 
            className={s.favorite}
            onClick={handleFavorite}
          >
            <Favorite className={`${s.favorite__img_active} ${s.favorite__img}`} />
            <span className={`${s.favorite__text} ${s.favorite__text_active}`}>В избранном</span>
          </div>
        ) : (
          <div
            className={s.favorite}
            onClick={handleFavorite}
          >
            <Favorite className={s.favorite__img} />
            <span className={s.favorite__text}>В избранное</span>
          </div>
        )}
      </div>
  )
}

export default HeaderBtns