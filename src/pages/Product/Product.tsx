import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs'
import Container from 'commons/Container/Container'
import ProductContent from 'commons/ProductContent/ProductContent'
import ProductInfo from 'components/Catalog/Product/ProductInfo/ProductInfo'
import { useActions, useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import s from './Product.module.scss'

const Product = () => {

  const location = useLocation()
  const paths = location.pathname.split('/')
  const productId = paths[paths.length - 1]

  const product = useAppSelector(state => state.product.product)
  const ratings = useAppSelector(state => state.rating.ratings)

  const {getProduct, getRatings} = useActions()
  useEffect(() => {
    getProduct({id: Number(productId)})
    getRatings({productId: Number(productId)})
  }, [])

  return (
    <Container>
      <BreadCrumbs />
      <ProductContent contentTitle={product.name}>
        <div className={s.product}>
          <ProductInfo 
            product={product}
            ratings={ratings}
          />
        </div>
      </ProductContent>
    </Container>
  )
}

export default Product