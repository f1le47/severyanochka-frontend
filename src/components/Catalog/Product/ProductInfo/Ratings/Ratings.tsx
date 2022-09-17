import Rating from 'commons/Rating/Rating'
import s from './Ratings.module.scss'
import {ReactComponent as Rate} from 'assets/img/card/rate.svg'
import Comment from './Comment/Comment'
import { IRatings } from './IRatings'
import InputRate from './InputRate/InputRate'
import { useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'

const Ratings = ({ratings, commonRating, productId}: IRatings) => {

  const {isAuth, user} = useAppSelector(state => state.user)

  let isAppreciated = false
  ratings.forEach(rating => {
    if (rating.userId === user.id) {
      isAppreciated = true
    }
  })

  useEffect(() => {
    five = 0
    four = 0
    three = 0
    two = 0
    one = 0
  }, [ratings])
  
  let five = 0
  let four = 0
  let three = 0
  let two = 0
  let one = 0
  ratings.forEach(rating => {
    if (rating.rate === 5) {
      five = five + 1
    } else if (rating.rate === 4) {
      four = four + 1
    } else if (rating.rate === 3) {
      three = three + 1
    } else if (rating.rate === 2) {
      two = two + 1
    } else if (rating.rate === 1) {
      one = one + 1
    }
  })

  return (
    <div className={s.ratings}>
      <h1 className={s.title}>Отзывы</h1>
      <div className={s.body}>
        <div className={s.amountRatings}>
          <div className={s.commonRating}>
            <Rating rating={commonRating} />
            <span className={s.commonRating__text}>{`${commonRating} из 5`}</span>
          </div>
          <div className={s.rateType}>
            <span className={`${s.rateType__number} ${s.rateType__type}`}>5</span>
            <div className={s.rateTypeStars}>
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
            </div>
            <span className={`${s.rateType__number} ${s.rateType__amount}`}>{five}</span>
          </div>
          <div className={s.rateType}>
            <span className={`${s.rateType__number} ${s.rateType__type}`}>4</span>
            <div className={s.rateTypeStars}>
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
            </div>
            <span className={`${s.rateType__number} ${s.rateType__amount}`}>{four}</span>
          </div>
          <div className={s.rateType}>
            <span className={`${s.rateType__number} ${s.rateType__type}`}>3</span>
            <div className={s.rateTypeStars}>
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
            </div>
            <span className={`${s.rateType__number} ${s.rateType__amount}`}>{three}</span>
          </div>
          <div className={s.rateType}>
            <span className={`${s.rateType__number} ${s.rateType__type}`}>2</span>
            <div className={s.rateTypeStars}>
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
            </div>
            <span className={`${s.rateType__number} ${s.rateType__amount}`}>{two}</span>
          </div>
          <div className={s.rateType}>
            <span className={`${s.rateType__number} ${s.rateType__type}`}>1</span>
            <div className={s.rateTypeStars}>
              <Rate className={`${s.rateTypeStars__color} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
              <Rate className={`${s.rateTypeStars__uncolor} ${s.rateTypeStars__star}`} />
            </div>
            <span className={`${s.rateType__number} ${s.rateType__amount}`}>{one}</span>
          </div>
        </div>
        <div className={s.commentsBlock}>
          <div className={s.comments}>
            {ratings.length > 0 ? (
              ratings.map((rating) => {
                return (
                  <Comment rating={rating} productId={productId} />
                )
              })
            ) : (
              <span className={s.noComments}>Отзывов на этот продукт, пока что, нет</span>
            )}
          </div>
          {isAuth && !isAppreciated && <InputRate productId={productId} />}
        </div>
      </div>
    </div>
  )
}

export default Ratings