import { IDefaultDto } from './../../IDefaultDto';

export type JobType = {
  id: number,
  job_title: string,
  requirements: string,
  responsibilities: string,
  terms: string
}

export interface IGetJobsDto extends IDefaultDto {
  jobs: Array<JobType>
}