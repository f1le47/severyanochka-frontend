import { ICheckAuthDto } from "./ICheckAuthDto";
import { DefaultDto } from "dtos/DefaultDto";

export class CheckAuthDto extends DefaultDto {
  user;

  constructor({user, message, status}: ICheckAuthDto) {
    super({message, status})

    this.user = user
  }
}