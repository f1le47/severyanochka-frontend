import s from './Container.module.scss'
import { IContainer } from './IContainer'

const Container = ({children}: IContainer) => {
  return (
    <div className={s.container}>
      {children}
    </div>
  )
}

export default Container