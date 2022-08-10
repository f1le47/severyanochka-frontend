import { object, string } from "yup";
import { REQUIRED_ERROR } from "./yupErrorsHandler";

const dateValidator = object({
  input: string()
  .required(REQUIRED_ERROR)
})

export default dateValidator