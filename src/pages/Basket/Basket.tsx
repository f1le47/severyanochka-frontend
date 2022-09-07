import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs'
import Container from 'commons/Container/Container'
import Content from 'commons/Content/Content'
import BasketItems from 'components/Basket/BasketItems/BasketItems'
import Checkout from 'components/Basket/Checkout/Checkout'
import { useActions, useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'
import s from './Basket.module.scss'

const Basket = () => {

  const {basketProducts, amountBasketProducts} = useAppSelector(state => state.basket)

  const {getBasketProducts, savingsCard} = useActions()

  useEffect(() => {
    getBasketProducts()
    savingsCard()
  }, [])

  return (
    <Container>
      <BreadCrumbs />
      <Content amountBasketProducts={amountBasketProducts} contentTitle="Корзина">
        <div className={s.basket}>
          <BasketItems basketProducts={basketProducts} />
          <Checkout basketProducts={basketProducts} />
        </div>
      </Content>
    </Container>
  )
}

export default Basket