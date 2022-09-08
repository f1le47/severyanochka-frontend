import s from './Comment.module.scss';
import avatar from 'assets/img/avatar16.svg'
import Rating from 'commons/Rating/Rating';
import { IComment } from './IComment';
import { useActions, useAppSelector } from 'hooks/redux';
import {ReactComponent as Xmark} from 'assets/img/xmark.svg'
import { useState } from 'react';

const Comment = ({rating, productId}: IComment) => {

  const {userName, rate, date, comment, userId} = rating
  const [isShow, setIsShow] = useState(false)

  const user = useAppSelector(state => state.user.user)
  let isAppreciated = false
  if (userId === user.id) {
    isAppreciated = true
  }

  const {deleteRating} = useActions()
  const handleDelete = () => {
    deleteRating({productId})
  }

  return (
    <div 
      className={s.comment}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div className={s.user}>
        <img className={s.user__img} src={avatar} alt="#" />
        <span className={s.user__name}>{userName}</span>
        {isAppreciated && (
          <span className={s.user__you}>{`(Вы)`}</span>
        )}
      </div>
      <div className={s.rating}>
        <Rating rating={rate} />
        <span className={s.rating__date}>{date}</span>
      </div>
      <p className={s.comment__text}>{comment}</p>
      <div className={s.invisible}></div> {/* NEED FOR XMARK */}
      <Xmark 
        className={isShow ? `${s.xmark} ${s.xmark_active}` : s.xmark}
        onClick={handleDelete}
      />
    </div>
  )
}

export default Comment