import s from './Content.module.scss'
import { IContent } from './IContent'

const Content = ({contentTitle, children, amountBasketProducts}: IContent) => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>{contentTitle}</h1>
      {!!amountBasketProducts && amountBasketProducts > 0 && (
        <span className={s.amountBasketProducts}>{amountBasketProducts}</span>
      )}
      {children}
    </div>
  )
}

export default Content