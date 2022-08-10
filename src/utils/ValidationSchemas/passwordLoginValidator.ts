import { object, string } from 'yup'
import { MORE_THEN_FIVE_SYMBOLS_ERROR, REQUIRED_ERROR } from './yupErrorsHandler'

const passwordLoginValidator = object({
  input: string().required(REQUIRED_ERROR).min(5, MORE_THEN_FIVE_SYMBOLS_ERROR)
})

export default passwordLoginValidator