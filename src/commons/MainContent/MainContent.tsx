import s from './MainContent.module.scss'
import { IMainContent } from './IMainContent'

const Content = ({children}: IMainContent) => {
  return (
    <div className={s.content}>
      {children}
    </div>
  )
}

export default Content