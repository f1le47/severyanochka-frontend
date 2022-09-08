import Card from 'commons/Card/Card'
import { IProducts } from './IProducts'
import s from './Products.module.scss'
import {ReactComponent as Xmark} from 'assets/img/xmark.svg'
import Pagination from './Pagination/Pagination'
import { v4 } from 'uuid'

const Products = ({
  products, 
  countRange, 
  setCountRange, 
  items, 
  activePage, 
  setActivePage, 
  minPrice, 
  maxPrice, 
  handleClear, 
  currentCategory, 
  setCurrentCategory
}: IProducts) => {

  const handleClearInComp = () => {
    setCountRange([minPrice, maxPrice])
    handleClear()
  }

  return (
    <div className={s.products}>
      <div className={s.filters}>
        {currentCategory && (
          <div className={s.filter}>
            <span className={s.filter__text}>{currentCategory.name}</span>
            <Xmark 
              onClick={() => {
                if (!!setCurrentCategory) {
                  setCurrentCategory(null)
                }
              }} 
              className={s.filter__btn}
            />
          </div>
        )}
        <div className={s.filter}>
          <span className={s.filter__text}>
            {`Цена от ${countRange[0]} до ${countRange[1]}`}
          </span>
          <Xmark className={s.filter__btn} />
        </div>
        <div className={`${s.filter} ${s.filter__clear}`} onClick={handleClearInComp}>
          <span className={s.filter__text}>Очистить</span>
          <Xmark className={s.filter__btn} />
        </div>
      </div>
      <div className={s.cards}>
        {products.map((product) => (
          <div key={v4()} className={s.card}>
            <Card product={product} />
          </div>
        ))}
      </div>
      {items > 0 && (
        <Pagination 
          items={items}
          displayedItems={6}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      )}
    </div>
  )
}

export default Products