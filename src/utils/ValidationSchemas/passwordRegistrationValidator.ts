import { CURSIVE_LETTER_ERROR, CAPITAL_LETTER_ERROR, NUMBER_ERROR, MORE_THEN_FIVE_SYMBOLS_ERROR } from './yupErrorsHandler';
import { object, string } from 'yup'

const passwordRegistrationValidator = object({
  input: string()
  .matches(RegExp("(.*[a-z].*)"), CURSIVE_LETTER_ERROR)
  .matches(RegExp("(.*[A-Z].*)"), CAPITAL_LETTER_ERROR)
  .matches(RegExp("(.*\\d.*)"), NUMBER_ERROR)
  .min(5, MORE_THEN_FIVE_SYMBOLS_ERROR),
})

export default passwordRegistrationValidator