import { object, string } from "yup";
import { REQUIRED_ERROR } from "./yupErrorsHandler";

const codeValidator = object({
  input: string()
  .required(REQUIRED_ERROR)
})

export default codeValidator