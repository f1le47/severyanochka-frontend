import BreadCrumbs from 'commons/BreadCrumbs/BreadCrumbs'
import Container from 'commons/Container/Container'
import Content from 'commons/Content/Content'
import Filter from 'commons/Filter/Filter'
import Products from 'components/Favorite/Products/Products'
import { CategoryType } from 'dtos/categoryApiDtos/getCategoriesDto/IGetCategoriesDto'
import { useActions, useAppSelector } from 'hooks/redux'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import formattingPathText from 'utils/formattingPathText'
import s from './Favorite.module.scss'

const Favorite = () => {

  const location = useLocation()
  const path = location.pathname.split('/').slice(1)
  const contentTitle = formattingPathText(path[path.length - 1])

  const {favoriteProducts, favoriteItems, favoriteCategories, minPrice, maxPrice} = useAppSelector(state => state.favorite)
  const {getFavoriteProducts, getFavoriteCategories, getFavoriteMinMaxPrices} = useActions()
  
  const [activePage, setActivePage] = useState(1)
  const [countRange, setCountRange] = useState([0, 250])
  const [currentCategory, setCurrentCategory] = useState<null | CategoryType>(null)

  const screenWidth = window.screen.width

  useEffect(() => {
    getFavoriteProducts({page: 1, amount: 6})
    getFavoriteCategories()
    getFavoriteMinMaxPrices()
  }, [])
  
  useEffect(() => {
    if (currentCategory) {
      getFavoriteProducts({page: activePage, amount: 6, min: countRange[0], max: countRange[1], categoryId: currentCategory.id})
    } else {
      getFavoriteProducts({page: activePage, amount: 6, min: countRange[0], max: countRange[1]})
    }
  }, [activePage])

  useEffect(() => {
    setCountRange([minPrice, maxPrice])
  }, [minPrice, maxPrice])
  
  useEffect(() => {
    if (currentCategory) {
      getFavoriteProducts({page: 1, amount: 6, categoryId: currentCategory.id})
    } else {
      getFavoriteProducts({page: 1, amount: 6})
    }
  }, [currentCategory])
  
  useEffect(() => {
    if (currentCategory) {
      getFavoriteProducts({page: 1, amount: 6, min: countRange[0], max: countRange[1], categoryId: currentCategory.id})
    } else {
      getFavoriteProducts({page: 1, amount: 6, min: countRange[0], max: countRange[1]})
    }
  }, [countRange])
  
  const handleBlurRange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setActivePage(1)
    setCountRange(newValue as number[])
  }
  const handleClear = () => {
    getFavoriteProducts({page: 1, amount: 6})
  }

  return (
      <Container>
        <BreadCrumbs />
        <Content contentTitle={contentTitle}>
          <div className={s.favorite}>
            <Filter
              handleClear={handleClear}
              handleBlurRange={handleBlurRange}
              setCountRange={setCountRange} 
              countRange={countRange}
              categories={favoriteCategories}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setCurrentCategory={setCurrentCategory}
            />
            <Products 
              handleClear={handleClear}
              products={favoriteProducts}
              countRange={countRange}
              setCountRange={setCountRange}
              items={favoriteItems}
              activePage={activePage}
              setActivePage={setActivePage}
              minPrice={minPrice}
              maxPrice={maxPrice}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>
        </Content>
      </Container>
  )
}

export default Favorite