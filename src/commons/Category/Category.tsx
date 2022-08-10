import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import { ICategory } from './ICategory';

const Category = ({categoryName, categoryButton, categoryLink}: ICategory) => {
  return <div className={s.category}>
    <div className={s.categoryHeader}>
      <h1 className={s.categoryHeader__title}>{categoryName}</h1>
      <NavLink to={'/' + categoryLink}>{categoryButton}</NavLink>
    </div>
  </div>
}

export default Category;