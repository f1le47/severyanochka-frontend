import {ReactComponent as WarningIcon} from 'assets/img/formikErrors/warning.svg'
import { ISuccess } from './ISuccess'
import s from './Success.module.scss'

const Success = ({text}: ISuccess) => {

  return (
    <div className={s.success}>
      <WarningIcon className={s.icon} />
      <span className={s.text}>{text}</span>
    </div>
  )
}

export default Success