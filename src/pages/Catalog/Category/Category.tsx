import s from './Category.module.scss'
import Container from "commons/Container/Container"
import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs'
import Content from 'commons/Content/Content'
import { useActions, useAppSelector } from 'hooks/redux'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Filter from 'commons/Filter/Filter'
import Products from 'components/Favorite/Products/Products'

const Category = () => {

  const categories = useAppSelector(state => state.categories.categories)
  const location = useLocation()
  const paths = location.pathname.split('/')
  const categoryId = paths[paths.length - 1]
  let title = ''
  categories.forEach(category => {
    if (category.id === Number(categoryId)) {
      title = category.name
    }
  })
  useEffect(() => {
    getByCategoryId({id: Number(categoryId), page: 1, amount: 6})
    getMinMaxPrices({id: Number(categoryId)})
  }, [categoryId])

  const {minPrice, maxPrice, amountProducts, productsByCategoryId} = useAppSelector(state => state.categories)

  const [countRange, setCountRange] = useState([0, 250])
  const [activePage, setActivePage] = useState(1)

  const handleBlurRange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setActivePage(1)
    setCountRange(newValue as number[])
  }
  const handleClear = () => {
    getByCategoryId({id: Number(categoryId), page: 1, amount: 6})
  }

  const {getByCategoryId, getMinMaxPrices} = useActions()
  useEffect(() => {
    getByCategoryId({id: Number(categoryId), page: 1, amount: 6})
    getMinMaxPrices({id: Number(categoryId)})
  }, [])
  useEffect(() => {
    getByCategoryId({id: Number(categoryId), page: activePage, amount: 6})
  }, [activePage])
  useEffect(() => {
    setCountRange([minPrice, maxPrice])
  }, [minPrice, maxPrice])
  useEffect(() => {
    getByCategoryId({
      id: Number(categoryId),
      page: 1,
      amount: 6,
      min: countRange[0],
      max: countRange[1]
    })
  }, [countRange])

  return (
    <Container>
      <BreadCrumbs />
      <Content contentTitle={title}>
        <div className={s.category}>
          <Filter
            countRange={countRange}
            setCountRange={setCountRange}
            handleBlurRange={handleBlurRange}
            handleClear={handleClear}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          <Products 
            activePage={activePage}
            countRange={countRange}
            setCountRange={setCountRange}
            items={amountProducts}
            minPrice={minPrice}
            maxPrice={maxPrice}
            products={productsByCategoryId}
            setActivePage={setActivePage}
            handleClear={handleClear}
          />
        </div>
      </Content>
    </Container>
  )
}

export default Category