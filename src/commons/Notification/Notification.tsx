import s from './Notification.module.scss'
import Modal from 'commons/Modal/Modal'
import { INotification } from './INotification'
import Error from './Error/Error'
import Success from './Success/Success'
import { useEffect } from 'react'
import { useActions } from 'hooks/redux'

const Notification = ({errors, successes, productErrors, favoriteErrors}: INotification) => {

  const {clearLatestError, clearLatestSuccess, clearLatestProductError, clearLatestFavoriteError} = useActions()

  useEffect(() => {
    setTimeout(() => {
      if (errors.length > 0) {
        clearLatestError()
      }
    }, 2000)
  }, [errors])

  useEffect(() => {
    setTimeout(() => {
      if (successes.length > 0) {
        clearLatestSuccess()
      }
    }, 2000)
  }, [successes])

  useEffect(() => {
    setTimeout(() => {
      if (productErrors.length > 0) {
        clearLatestProductError()
      }
    }, 2000)
  }, [productErrors])

  useEffect(() => {
    setTimeout(() => {
      if (favoriteErrors.length > 0) {
        clearLatestFavoriteError()
      }
    }, 2000)
  }, [favoriteErrors])

  return (
    <Modal id="notification">
      <div className={s.notification}>
        {errors.map(error => {
          return (
            <Error text={error} />
          )
        })}
        {successes.map(success => {
          return (
            <Success text={success} /> 
          )
        })}
      </div>
    </Modal>
  )
}

export default Notification