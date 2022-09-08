import { categoriesActionCreators } from './categoriesActionCreators/categoriesActionCreators';
import { basketActionCreators } from './basketActionCreators/basketActionCreators';
import { authActionCreators } from "./authActionCreators/authActionCreators";
import { favoriteActionCreators } from "./favoriteActionCreators/favoriteActionCreators";
import { productActionCreators } from "./productActionCreators/productActionCreators";
import { ratingActionCreators } from './ratingActionCreators/ratingActionCreators';

export const allActionCreators = {
  ...authActionCreators,
  ...productActionCreators,
  ...favoriteActionCreators,
  ...basketActionCreators,
  ...categoriesActionCreators,
  ...ratingActionCreators
}