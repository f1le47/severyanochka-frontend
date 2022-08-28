import s from './Pagination.module.scss'
import {ReactComponent as MarkLeft} from 'assets/img/mark-left.svg'
import {ReactComponent as MarkRight} from 'assets/img/mark-right.svg'
import {ReactComponent as DoubleMarkLeft} from 'assets/img/double-mark-left.svg'
import {ReactComponent as DoubleMarkRight} from 'assets/img/double-mark-right.svg'
import { useEffect, useState } from 'react'
import { IPagination } from './IPagination'

const Pagination = ({favoriteItems, displayedItems, activePage, setActivePage}: IPagination) => {

  const favoritePages = Math.ceil(favoriteItems / displayedItems)
  const defaultLastPage = favoritePages > displayedItems ? displayedItems : favoritePages
  
  const [pageRange, setPageRange] = useState([1, defaultLastPage])

  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(true)
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false)
  const [isDoublePrevBtnDisabled, setIsDoublePrevBtnDisabled] = useState(true)
  const [isDoubleNextBtnDisabled, setIsDoubleNextBtnDisabled] = useState(false)

  useEffect(() => {
    setPageRange([1, defaultLastPage])
  }, [defaultLastPage])

  const pages = []
  for (let i = pageRange[0]; i <= pageRange[1]; i++) {
    pages.push(i)
  }

  useEffect(() => {
    setIsPrevBtnDisabled(activePage === 1 ? true : false)
    setIsNextBtnDisabled(activePage === favoritePages ? true : false)
    setIsDoublePrevBtnDisabled(activePage === 1 ? true : false)
    setIsDoubleNextBtnDisabled(activePage === favoritePages ? true : false)
  }, [activePage])

  const handlePrev = () => {
    if (activePage !== 1) {
      setActivePage(prev => prev - 1)
      if (activePage === pageRange[0]) {
        setPageRange(prev => [prev[0] - 1, prev[1] - 1])
      }
    }
  }
  const handleNext = () => {
    if (activePage !== favoritePages) {
      setActivePage(prev => prev + 1)
      if (activePage === pageRange[1]) {
        setPageRange(prev => [prev[0] + 1, prev[1] + 1])
      }
    }
  }

  const handleDoublePrev = () => {
    if (pageRange[0] - displayedItems >= 1) {
      setPageRange(prev => [prev[0] - displayedItems, prev[1] - displayedItems])
      setActivePage(pageRange[0] - displayedItems)
    } else if (pageRange[0] === 1) {
      setActivePage(1)
    } else {
      setPageRange([1, 1 + displayedItems])
      setActivePage(1)
    }
  }
  const handleDoubleNext = () => {
    if (pageRange[1] + displayedItems < favoritePages) {
      setPageRange(prev => [prev[0] + displayedItems, prev[1] + displayedItems])
      setActivePage(pageRange[0] + displayedItems)
    } else if (pageRange[1] === favoritePages) {
      setActivePage(favoritePages)
    } else {
      setPageRange([favoritePages - displayedItems, favoritePages])
      setActivePage(favoritePages - displayedItems)
    }
  }

  return (
    <div className={s.pages}>
      {favoritePages > displayedItems && (
        <DoubleMarkLeft 
          className={isDoublePrevBtnDisabled ? `${s.doublePrev} ${s.markBtn} ${s.markBtn_disabled}` : `${s.doublePrev} ${s.markBtn}`}
          onClick={handleDoublePrev}
        />
      )}
      <MarkLeft 
        className={isPrevBtnDisabled ? `${s.prev} ${s.markBtn} ${s.markBtn_disabled}` : `${s.prev} ${s.markBtn}`}
        onClick={handlePrev}
      />
      {pages.map(page => (
        <button 
          className={page === activePage ? `${s.page} ${s.page_active}` : s.page}
          onClick={() => setActivePage(page)}
        >
          {page}
        </button>
      ))}
      <MarkRight 
        className={isNextBtnDisabled ? `${s.next} ${s.markBtn} ${s.markBtn_disabled}` : `${s.next} ${s.markBtn}`}
        onClick={handleNext}
      />
      {favoritePages > displayedItems && (
        <DoubleMarkRight
          className={isDoubleNextBtnDisabled ? `${s.doubleNext} ${s.markBtn} ${s.markBtn_disabled}` : `${s.doubleNext} ${s.markBtn}`}
          onClick={handleDoubleNext}
        />
      )}
    </div>
  )
}

export default Pagination