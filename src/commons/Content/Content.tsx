import s from './Content.module.scss'
import { IContent } from './IContent'

const Content = ({children}: IContent) => {
  return (
    <div className={s.content}>
      {children}
    </div>
  )
}

export default Content