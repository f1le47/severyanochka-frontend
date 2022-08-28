import { DefaultDto } from 'dtos/DefaultDto';
import { IGetFavoriteProductsDto } from './IGetFavoriteProducts';

export class GetFavoriteProductDto extends DefaultDto {
  favoriteProducts;
  amountFavoriteProducts;

  constructor({favoriteProducts, amountFavoriteProducts, message, status}: IGetFavoriteProductsDto) {
    super({message, status})

    this.favoriteProducts = favoriteProducts
    this.amountFavoriteProducts = amountFavoriteProducts
  }
}