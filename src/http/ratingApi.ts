import { $instance, $authInstance } from "./index";
import { IAddRating, IChangeRating, IDeleteRating, IGetRating } from "types/http/IRatingApi";
import { GetRatingDto } from "dtos/ratingApiDtos/getRatingDto/getRatingDto";
import { AddRatingDto } from 'dtos/ratingApiDtos/addRatingDto/addRatingDto';
import { ChangeRatingDto } from "dtos/ratingApiDtos/changeRatingDto/changeRatingDto";
import { DefaultDto } from "dtos/DefaultDto";

class RatingApi {
  async getRating({productId}: IGetRating) {
    const response = await $instance.get(`/rating/rates?productId=${productId}`)

    const responseDto = new GetRatingDto({
      message: response.data.message,
      ratings: response.data.ratings,
      status: response.status
    })
    return {...responseDto}
  }
  async addRating({rate, comment, productId}: IAddRating) {
    const response = await $authInstance.post('/rating/add-rate', {rate, comment, productId})

    const responseDto = new AddRatingDto({
      rating: response.data.rating,
      message: response.data.message,
      status: response.status
    })
    return {...responseDto}
  }
  async changeRating({rate, comment, productId}: IChangeRating) {
    const response = await $authInstance.put('/rating/rate', {rate, comment, productId})

    const responseDto = new ChangeRatingDto({
      rating: response.data.rating,
      message: response.data.message,
      status: response.status
    })
    return {...responseDto}
  }
  async deleteRating({productId}: IDeleteRating) {
    const response = await $authInstance.delete(`/rating/rate?productId=${productId}`)

    const responseDto = new DefaultDto({message: response.data.message, status: response.status})
    return {...responseDto}
  }
}

export default new RatingApi();