import { IDefaultDto } from "dtos/userApiDtos/IDtos/IDefaultDto";

export class DefaultDto {
  message;
  status;

  constructor({message, status}: IDefaultDto) {
    this.message = message;
    this.status = status
  }
}