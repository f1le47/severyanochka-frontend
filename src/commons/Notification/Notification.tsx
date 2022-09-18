import s from './Notification.module.scss'
import Modal from 'commons/Modal/Modal'
import { INotification } from './INotification'
import Error from './Error/Error'
import Success from './Success/Success'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import {notificationSlice} from 'redux/reducers/notificationSlice'

const Notification = ({}: INotification) => {

  const {errors, successes} = useAppSelector(state => state.notification)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      if (errors.length > 0) {
        dispatch(notificationSlice.actions.clearLatestError())
      }
    }, 2000)
  }, [errors])

  useEffect(() => {
    setTimeout(() => {
      if (successes.length > 0) {
        dispatch(notificationSlice.actions.clearLatestSuccess())
      }
    }, 2000)
  }, [successes])

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