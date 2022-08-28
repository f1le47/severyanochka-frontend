import { authActionCreators } from "./authActionCreators/authActionCreators";
import { favoriteActionCreators } from "./favoriteActionCreators/favoriteActionCreators";
import { productActionCreators } from "./productActionCreators/productActionCreators";

export const allActionCreators = {
  ...authActionCreators,
  ...productActionCreators,
  ...favoriteActionCreators
}