import { NavLink, useLocation } from 'react-router-dom'
import s from './BreadCrumbs.module.scss'
import {ReactComponent as MarkRight} from 'assets/img/mark-right.svg'
import formattingPathText from 'utils/formattingPathText'

const BreadCrumbs = () => {

  const location = useLocation()

  const paths = location.pathname.split('/').slice(1)

  return (
    <div className={s.breadCrumbs}>
      <NavLink to='/' className={s.link}>Главная</NavLink>
      {paths.map((path, index) => {
        const pathText = formattingPathText(path.toString())
        return index !== (paths.length - 1) ? 
        (
          <>
            <MarkRight className={s.markRight} />
            <NavLink to={`/${path}`} className={s.link}>{pathText}</NavLink>
          </>
        ) 
        : 
        (
          <>
            <MarkRight className={s.markRight} />
            <span className={s.text}>{pathText}</span>
          </>
        )
      })}
    </div>
  )
}

export default BreadCrumbs