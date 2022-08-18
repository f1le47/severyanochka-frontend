import s from './Main.module.scss';
import mainBanner from 'assets/img/main-banner.svg'
import Container from 'commons/Container/Container';
import Category from 'commons/Category/Category';
import Content from 'commons/Content/Content';
import { useActions, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import Block from 'commons/Block/Block';
import MainMap from 'components/Main/Map/MainMap';

const Main = () => {

  const {discountProducts, products, latestProducts} = useAppSelector(state => state.product)

  const {getDiscountProducts, getProducts, getLatestProducts} = useActions()

  useEffect(() => {
    getDiscountProducts({page: 1, amount: 4})
  }, [])

  useEffect(() => {
    getLatestProducts({page: 1, amount: 4})
  }, [])

  useEffect(() => {
    getProducts({page: 1, amount: 4})
  }, [])

  return <div className={s.main}>
    <img src={mainBanner} alt="banner" className={s.banner} />
    <Container>
      <Content>
        <Category
          products={discountProducts}
          categoryName="Акции"
          categoryLink="/stock"
          categoryButton="Все акции"
        />
        <Category 
          products={latestProducts}
          categoryName="Новинки"
          categoryLink="/new-products"
          categoryButton="Все новинки"
        />
        <Category 
          products={products}
          categoryName="Покупали раньше"
          categoryLink="/bought-before"
          categoryButton="Все покупки"
        />
        <Block blockTitle="Наши магазины">
          <MainMap />
        </Block>
      </Content>
    </Container>
  </div>
}

export default Main