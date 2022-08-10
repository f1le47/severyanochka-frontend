import { IDefaultDto } from "./IDefaultDto";


export class DefaultDto {
  message;
  status;

  constructor({message, status}: IDefaultDto) {
    this.message = message;
    this.status = status
  }
}