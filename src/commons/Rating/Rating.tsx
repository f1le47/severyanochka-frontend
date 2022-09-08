import { IRating } from './IRating'
import s from './Rating.module.scss'
import {ReactComponent as Rate} from 'assets/img/card/rate.svg'

const Rating = ({rating}: IRating) => {

  const rest = 5 - rating
  const rateArr = []
  for (let i = 0; i < rating; i++) {
    rateArr.push(1)
  }
  for (let i = 0; i < rest; i++) {
    rateArr.push(0)
  }

  return (
    <div className={s.rating}>
      {rateArr.map(isActive => {
            return (
              <Rate className={isActive === 1 ? `${s.rate} ${s.rate_active}` : s.rate} />
            )
          })}
    </div>
  )
}

export default Rating