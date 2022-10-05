import { GetJobsDto } from "dtos/jobApiDtos/getJobsDto/getJobsDto"
import { $instance } from "./index"
import { IGetJobs } from "types/http/IJobApi"

class JobApi {
  async getJobs({page, amount}: IGetJobs) {
    const response = await $instance.get(`/job/jobs?page=${page}&amount=${amount}`)

    const responseDto = new GetJobsDto({
      jobs: response.data.jobs,
      message: response.data.message,
      status: response.status
    })

    return {...responseDto}
  }
}

export default new JobApi()