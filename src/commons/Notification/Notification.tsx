import s from './Notification.module.scss'
import Modal from 'commons/Modal/Modal'
import { INotification } from './INotification'
import Error from './Error/Error'
import Success from './Success/Success'
import { useEffect } from 'react'
import { useActions } from 'hooks/redux'

const Notification = ({errors, successes, productErrors}: INotification) => {

  const {clearLatestError, clearLatestSuccess, clearLatestProductError} = useActions()

  useEffect(() => {
    setTimeout(() => {
      if (errors.length > 0) {
        clearLatestError()
      }
    }, 1500)
  }, [errors])

  useEffect(() => {
    setTimeout(() => {
      if (successes.length > 0) {
        clearLatestSuccess()
      }
    }, 1500)
  }, [successes])

  useEffect(() => {
    setTimeout(() => {
      if (productErrors.length > 0) {
        clearLatestProductError()
      }
    }, 1500)
  }, [productErrors])

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