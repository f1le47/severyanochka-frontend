import s from './Select.module.scss'
import markdown from 'assets/img/authWindow/markdown.svg'
import { useEffect } from 'react'
import { ISelect } from './ISelect'

const Select = ({selectName, selectLabel, options, setInputValue}: ISelect) => {

  useEffect(() => {
    setInputValue(options[0])
  })

  return <div className={s.field}>
    <span className={s.field__label}>{selectLabel}</span>
    <div className={s.fieldSelect}>
      <select 
        name={selectName} 
        className={s.fieldSelect__select}
        onChange={(e) => setInputValue(e.target.value)}
      >
        {options.map((option, index) => 
          <option key={index} value={option}>{option}</option>)}
      </select>
      <img src={markdown} className={s.fieldSelect__mark} alt=">" />
    </div>
  </div>
}

export default Select