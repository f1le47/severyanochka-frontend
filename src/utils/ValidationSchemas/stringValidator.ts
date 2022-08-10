import { object, string } from "yup"
import { MAX_SYMBOLS_IS_25, REQUIRED_ERROR } from "./yupErrorsHandler"

const stringValidator = object({
  input: string()
  .required(REQUIRED_ERROR).max(25, MAX_SYMBOLS_IS_25)
})

export default stringValidator