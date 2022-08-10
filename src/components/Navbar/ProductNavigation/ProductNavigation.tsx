import s from './ProductNavigation.module.scss'
import burgerLine from '../../../assets/img/burger-line.svg';
import loupe from '../../../assets/img/searchString/loupe.svg';
import { IProductNavigation } from './IProductNavigation';

const ProductNavigation = ({isDropDownCategoryVisible, setisDropDownCategoryVisible}: IProductNavigation) => {

  return <div className={s.productNav}>
  <div className={s.productNavCatalog} onClick={(e) => {
    e.stopPropagation()
    setisDropDownCategoryVisible(!isDropDownCategoryVisible)
  }}>
    <div className={s.productNavCatalogBurger}>
      <img src={burgerLine} alt="-" className={s.productNavCatalogBurger__line} />
      <img src={burgerLine} alt="-" className={s.productNavCatalogBurger__line} />
      <img src={burgerLine} alt="-" className={s.productNavCatalogBurger__line} />
    </div>
    <span className={s.productNavCatalog__text}>Каталог</span>
  </div>
  { isDropDownCategoryVisible ? (<div className={s.productNavCatalogDrop} onClick={(e) => e.stopPropagation()}>
      <span className={s.productNavCatalogDrop__link}>Хлебобулочные изделия</span>
      <span className={s.productNavCatalogDrop__link}>Молоко, сыр, яйцо</span>
      <span className={s.productNavCatalogDrop__link}>Фрукты и овощи</span>
      <span className={s.productNavCatalogDrop__link}>Замороженные продукты</span>
      <span className={s.productNavCatalogDrop__link}>Напитки</span>
      <span className={s.productNavCatalogDrop__link}>Кондитерские изделия</span>
      <span className={s.productNavCatalogDrop__link}>Чай, кофе</span>
      <span className={s.productNavCatalogDrop__link}>Бакалея</span>
      <span className={s.productNavCatalogDrop__link}>Здоровое питание</span>
      <span className={s.productNavCatalogDrop__link}>Зоотовары</span>
      <span className={s.productNavCatalogDrop__link}>Детское питание</span>
      <span className={s.productNavCatalogDrop__link}>Мясо, птица, колбаса</span>
      <span className={s.productNavCatalogDrop__link}>Непродовольственные товары</span>
    </div>) : <></> }
  <div className={s.productNavString}>
    <input type="text"
          className={s.productNavString__input}
          placeholder="Найти товар" />
    <img src={loupe} alt="🔍︎" className={s.productNavString__img} />
  </div>
</div>
}

export default ProductNavigation