import {ReactComponent as WarningIcon} from 'assets/img/formikErrors/warning.svg'
import { IError } from './IError'
import s from './Error.module.scss'

const Error = ({text}: IError) => {

  return (

      <div className={s.warning}>
        <WarningIcon className={s.icon} />
        <span className={s.text}>{text}</span>
      </div>

  )
}

export default Error