import { NavLink } from 'react-router-dom';
import { CategoryType } from '../../types/CategoryTypes/CategoryTypes';
import s from './Category.module.scss';

const Category = ({categoryName, categoryButton, categoryLink}: CategoryType) => {
  return <div className={s.category}>
    <div className={s.categoryHeader}>
      <h1 className={s.categoryHeader__title}>{categoryName}</h1>
      <NavLink to={'/' + categoryLink}>{categoryButton}</NavLink>
    </div>
  </div>
}

export default Category;