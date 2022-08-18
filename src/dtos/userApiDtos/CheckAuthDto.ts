import { ICheckAuthDto } from "dtos/userApiDtos/ICheckAuthDto";
import { DefaultDto } from "../DefaultDto";

export class CheckAuthDto extends DefaultDto {
  user;

  constructor({user, message, status}: ICheckAuthDto) {
    super({message, status})

    this.user = user
  }
}