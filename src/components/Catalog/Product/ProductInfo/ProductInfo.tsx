import s from './ProductInfo.module.scss'
import HeaderBtns from './HeaderBtns/HeaderBtns'
import Card from './Card/Card'
import { IProductInfo } from './IProductInfo'
import Ratings from './Ratings/Ratings'
import { useRef } from 'react'
import Category from 'commons/Category/Category'
import { useActions, useAppSelector } from 'hooks/redux'

const ProductInfo = ({product, ratings}: IProductInfo) => {

  let ratingsAmount = 0
  ratings.forEach(rating => {
    ratingsAmount = ratingsAmount + 1
  })

  const ratingsRef = useRef<HTMLDivElement>(null)

  const discountProducts = useAppSelector(state => state.product.discountProducts)
  const {getDiscountProducts} = useActions()
  const screenWidth = window.screen.width
  if (discountProducts.length === 0) {
    if (screenWidth < 992 && screenWidth > 768) {
      getDiscountProducts({page: 1, amount: 3})
    } else {
      getDiscountProducts({page: 1, amount: 4})
    }
  }

  return (
    <div className={s.productInfo}>
      <HeaderBtns
        ratingsRef={ratingsRef}
        rating={product.rating} 
        ratingsAmount={ratingsAmount} 
        productId={product.id}
      />
      <Card product={product} />
      <div 
        className={s.ratings}
        ref={ratingsRef}
      >
        <Ratings
          productId={product.id}
          ratings={ratings}
          commonRating={product.rating}
        />
      </div>
      <Category
          products={discountProducts}
          categoryName="Акции"
          categoryLink="/stock"
          categoryButton="Все акции"
      />
    </div>
  )
}

export default ProductInfo