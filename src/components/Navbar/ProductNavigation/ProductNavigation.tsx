import s from './ProductNavigation.module.scss'
import loupe from '../../../assets/img/searchString/loupe.svg';
import { IProductNavigation } from './IProductNavigation';
import Catalog from './Catalog/Catalog';

const ProductNavigation = ({}: IProductNavigation) => {

  return (
    <div className={s.productNav}>
      <Catalog />
      <div className={s.productNavString}>
        <input type="text"
              className={s.productNavString__input}
              placeholder="Найти товар" />
        <img src={loupe} alt="🔍︎" className={s.productNavString__img} />
      </div>
    </div>
  )
}

export default ProductNavigation