import Card from 'commons/Card/Card';
import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import { ICategory } from './ICategory';
import markRight from 'assets/img/mark-right.svg'

const Category = ({categoryName, categoryButton, categoryLink, products}: ICategory) => {

  return (
    <div className={s.category}>
      <div className={s.header}>
        <h1 className={s.title}>{categoryName}</h1>
        <div className={s.navlink}>
          <NavLink className={s.link} to={categoryLink}>{categoryButton}</NavLink>
          <img src={markRight} className={s.markRight} alt=">" />
        </div>
      </div>
      <div className={s.cards}>
        {products.map(product => {
          return (
            <Card key={product.id} product={product} />
          )
        })}
      </div>
    </div>
  )
}

export default Category;