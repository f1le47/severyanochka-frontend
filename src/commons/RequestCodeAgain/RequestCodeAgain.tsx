import { useActions } from 'hooks/redux'
import { useEffect, useState } from 'react'
import { IRequestCodeAgain } from './IRequestCodeAgain'
import s from './RequestCodeAgain.module.scss'

const RequestCodeAgain = ({phoneNumber}: IRequestCodeAgain) => {

  const [timer, setTimer] = useState('60')
  const [isTimerActive, setIsTimerActive] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (Number(timer) === 0) {
        setIsTimerActive(false)
      } else {
        setTimer(prevState => {
          const number = Number(prevState)
          if (number < 10) {
            return '0' + String(number - 1)
          } else {
            return String(number - 1)
          }
        })
      }
    }, 1000)
  }, [timer])

  const {resendCode} = useActions()
  const handleClick = () => {
    resendCode({phoneNumber})
    setTimer('60')
  }

  let secondWordForm
  if (Number(timer[1]) >= 2 && Number(timer[1]) <= 4) {
    secondWordForm = 'секунды'
  } else if (Number(timer[1]) === 1) {
    secondWordForm = 'секунду'
  } else if (Number(timer) >= 11 && Number(timer) <= 14) {
    secondWordForm = 'секунд'
  } else {
    secondWordForm = 'секунд'
  }

  return (
    <div className={s.request}>
      {isTimerActive ? (
        <>
          <span className={s.request__text}>Запросить код заново можно через</span>
          <span className={s.request__text_wide}>{timer} {secondWordForm}</span>
        </>
      ) : (
          <button className={s.request__btn} onClick={handleClick}>Отправить еще раз</button>
      ) }
    </div>
  )
}

export default RequestCodeAgain