import { DefaultDto } from "dtos/DefaultDto";
import { IGetJobsDto } from "./IGetJobsDto";

export class GetJobsDto extends DefaultDto {
  jobs;

  constructor({jobs, message, status}: IGetJobsDto) {
    super({message, status})

    this.jobs = jobs;
  }
}