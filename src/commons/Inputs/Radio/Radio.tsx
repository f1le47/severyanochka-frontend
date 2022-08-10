import { useEffect, useState } from 'react'
import { IRadio } from './IRadio'
import s from './Radio.module.scss'

const Radio = ({setInputValue}: IRadio) => {

  const [activeBtn, setActiveBtn] = useState(1)

  useEffect(() => {
    setInputValue("male")
  })

  useEffect(() => {
    activeBtn === 1 ? setInputValue("male") : setInputValue("female")
  }, [activeBtn, setInputValue])

  return <div className={s.radio}>
    <span className={s.radio__label}>Пол</span>
    <div className={s.radioBtns}>
      <span 
        className={activeBtn === 1 ? 
          `${s.radioBtns__btn} ${s.radioBtns__btn_active}` 
            : 
          s.radioBtns__btn}
        onClick={() => setActiveBtn(1)}>
        Мужской
      </span>
      <span
        className={activeBtn === 2 ? 
          `${s.radioBtns__btn} ${s.radioBtns__btn_active}` 
            : 
          s.radioBtns__btn}
        onClick={() => setActiveBtn(2)}>
        Женский
      </span>
    </div>
  </div>
}

export default Radio