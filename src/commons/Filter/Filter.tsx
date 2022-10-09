import s from './Filter.module.scss'
import inputLine from 'assets/img/input-line.svg'
import { useEffect, useState } from 'react'
import { Box, Slider } from '@material-ui/core'
import IosSwitchMaterialUi from 'ios-switch-material-ui'
import { IFilter } from './IFilter'


const Filter = ({setCountRange, countRange, categories, minPrice, maxPrice, handleBlurRange, handleClear, setCurrentCategory}: IFilter) => {

  const [range, setRange] = useState([minPrice, maxPrice])
  const [isStock, setIsStock] = useState(true)

  const screenWidth = window.screen.width
  const checkForIsOpen = screenWidth > 992 ? true : false
  const [isOpen, setIsOpen] = useState(checkForIsOpen) // BOOL ALWAYS TRUE FOR SCREEN WIDTH > 992

  useEffect(() => {
    setRange([minPrice, maxPrice])
  }, [minPrice, maxPrice])

  useEffect(() => {
    setRange([countRange[0], countRange[1]])
  }, [countRange])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
    setRange(newValue as number[])
  };

  const handleClearInComp = () => {
    setCountRange([minPrice, maxPrice])
    handleClear()
  }

  const handleMinChange = (e: any) => {
    const currentValue = Number(e.target.value)

    setRange([currentValue, range[1]])
  }
  const handleMaxChange = (e: any) => {
    const currentValue = Number(e.target.value)

    setRange([range[0], currentValue])
  }

  const handleClose = () => {
    if(!checkForIsOpen) {
      setIsOpen(false)
    }
  }
  const handleOpen = () => {
    if(!checkForIsOpen) {
    setIsOpen(true)
    }
  }

  return (
    isOpen ? (
      <div 
        className={s.filter}
        onClick={handleClose}
      >
      <span className={s.blockName}>Фильтр</span>
      <div className={s.count}>
        <div className={s.countHeader}>
          <span className={s.countHeader__text}>Цена</span>
          <button className={s.countHeader__resetBtn} onClick={handleClearInComp}>Очистить</button>
        </div>
        <div className={s.countInputs}>
          <input 
            type="string"
            className={s.countInputs__input}
            value={range[0]}
            onChange={handleMinChange}
           />
          <img src={inputLine} alt="-" />
          <input 
            type="string"
            className={s.countInputs__input}
            value={range[1]}
            onChange={handleMaxChange}
           />
        </div>
        <Box sx={{ width: 272}}>
          <Slider
            className={s.count__range}
            getAriaLabel={() => 'Cost range'}
            value={range}
            onChange={handleChange}
            onChangeCommitted={handleBlurRange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
          />
        </Box>
      </div>
      {categories && (
        <div className={s.categories}>
        {categories.map(favoriteCategory => {
          return (
            <button 
              onClick={() => {
                if (!!setCurrentCategory) {
                  setCurrentCategory(favoriteCategory)
                }
              }} 
              className={s.category}
            >
              {favoriteCategory.name}
            </button>
          )
        })}
      </div>
      )}
      <div className={s.inStock}>
        <IosSwitchMaterialUi
          colorKnobOnLeft="#fff"
          colorKnobOnRight="#fff"
          colorSwitch={isStock ? "#70C05B" : "#8F8F8F"}
          onChange={() => setIsStock(prev => !prev)}
        />
        <span className={s.inStock__text}>В наличии</span>
      </div>
      {/* <button className={s.apply}>Применить</button> */}
    </div>
    ) 
    :
    (
      <span 
        className={s.openBtn}
        onClick={handleOpen}
      >
        Фильтр
      </span>
    )
  )
}

export default Filter