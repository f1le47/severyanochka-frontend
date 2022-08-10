export const REQUIRED_ERROR = 'Это поле обязательно для ввода'
export const MORE_THEN_FIVE_SYMBOLS_ERROR = 'Больше 5 символов'
export const CURSIVE_LETTER_ERROR = 'Прописная буква'
export const CAPITAL_LETTER_ERROR = 'Заглавная буква'
export const NUMBER_ERROR = 'Цифра'
export const UNCORRECT_PHONE_NUMBER_ERROR = 'Некорректный номер телефона'
export const MAX_SYMBOLS_IS_25 = 'Максимально 25 символов'
export const PASSWORDS_MUST_MATCH = 'Пароли должны совпадать'
export const ENTER_YOUR_DATE_ERROR = 'Введите вашу дату рождения'

 
function yupErrorsHandler(message: string) {
  switch(message) {
    case REQUIRED_ERROR:
      return {
        id: 1,
        message
      }
    case MORE_THEN_FIVE_SYMBOLS_ERROR:
      return {
        id: 2,
        message
      }
    case CURSIVE_LETTER_ERROR:
      return {
        id: 3,
        message
      }
    case CAPITAL_LETTER_ERROR:
      return {
        id: 4,
        message
      }
    case NUMBER_ERROR:
      return {
        id: 5,
        message
      }
    case UNCORRECT_PHONE_NUMBER_ERROR:
      return {
        id: 6,
        message
      }
    case MAX_SYMBOLS_IS_25:
      return {
        id: 7,
        message
      }
    case PASSWORDS_MUST_MATCH:
      return {
        id: 8,
        message
      }
    case ENTER_YOUR_DATE_ERROR:
      return {
        id: 9,
        message
      }
    default: {
      return null
    }
  }
}

export default yupErrorsHandler