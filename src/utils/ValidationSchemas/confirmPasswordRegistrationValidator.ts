import { object, string } from 'yup';
import { PASSWORDS_MUST_MATCH, REQUIRED_ERROR } from './yupErrorsHandler';
const confirmPasswordRegistrationValidator = (password: string) => {
  return object({
    input: string()
    .required(REQUIRED_ERROR)
    .oneOf([password], PASSWORDS_MUST_MATCH)
  })
}

export default confirmPasswordRegistrationValidator