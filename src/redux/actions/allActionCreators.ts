import { authActionCreators } from "./authActionCreators/authActionCreators";
import { productActionCreators } from "./productActionCreators/productActionCreators";

export const allActionCreators = {
  ...authActionCreators,
  ...productActionCreators
}