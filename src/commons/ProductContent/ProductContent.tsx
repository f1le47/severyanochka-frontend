import { IProductContent } from './IProductContent';
import s from './ProductContent.module.scss';

const ProductContent = ({contentTitle, children}: IProductContent) => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>{contentTitle}</h1>
      {children}
    </div>
  )
}

export default ProductContent