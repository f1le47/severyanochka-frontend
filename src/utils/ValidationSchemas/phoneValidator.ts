import { object, string } from 'yup'
import 'yup-phone-lite'
import { REQUIRED_ERROR, UNCORRECT_PHONE_NUMBER_ERROR } from './yupErrorsHandler'

const phoneValidator = object({
  input: string()
  .required(REQUIRED_ERROR)
  .phone('RU', UNCORRECT_PHONE_NUMBER_ERROR)
})

export default phoneValidator