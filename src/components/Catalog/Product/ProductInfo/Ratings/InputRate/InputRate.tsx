import s from './InputRate.module.scss';
import {ReactComponent as Rate} from 'assets/img/rate.svg'
import { useState } from 'react';
import { useActions } from 'hooks/redux';
import { IInputRate } from './IInputRate';

const InputRate = ({productId}: IInputRate) => {

  const [hoveredItem, setHoveredItem] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0)
  const [value, setValue] = useState('')

  const handleHover = (pos: number) => {
    setHoveredItem(pos)
  }

  const handleClick = (pos: number) => {
    if (selectedItem === pos) {
      return setSelectedItem(0)
    }
    setSelectedItem(pos)
  }

  const {addRating} = useActions()
  const handleSubmit = () => {
    addRating({comment: value, productId, rate: selectedItem })
  }

  return (
    <div className={s.inputRate}>
      <div className={s.yourRate}>
        <h2 className={s.yourRate__title}>Ваша оценка</h2>
        <div className={s.stars}>
          <Rate 
            className={hoveredItem >= 1 || selectedItem >= 1 ? `${s.stars__star} ${s.stars__star_active}` : s.stars__star} 
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(0)}
            onClick={() => handleClick(1)}
          />
          <Rate 
            className={hoveredItem >= 2 || selectedItem >= 2 ? `${s.stars__star} ${s.stars__star_active}` : s.stars__star} 
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleHover(0)}
            onClick={() => handleClick(2)}
          />
          <Rate 
            className={hoveredItem >= 3 || selectedItem >= 3 ? `${s.stars__star} ${s.stars__star_active}` : s.stars__star}  
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleHover(0)}
            onClick={() => handleClick(3)}
          />
          <Rate 
            className={hoveredItem >= 4 || selectedItem >= 4 ? `${s.stars__star} ${s.stars__star_active}` : s.stars__star}  
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={() => handleHover(0)}
            onClick={() => handleClick(4)}
          />
          <Rate 
            className={hoveredItem >= 5 || selectedItem >= 5 ? `${s.stars__star} ${s.stars__star_active}` : s.stars__star} 
            onMouseEnter={() => handleHover(5)}
            onMouseLeave={() => handleHover(0)}
            onClick={() => handleClick(5)}
          />
        </div>
      </div>
      <textarea
        className={s.input}
        placeholder="Отзыв"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        className={s.btn}
        disabled={value === '' || selectedItem === 0}
        onClick={handleSubmit}
      >
        Отправить отзыв
      </button>
    </div>
  )
}

export default InputRate