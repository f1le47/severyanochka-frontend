import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobType } from "dtos/jobApiDtos/getJobsDto/IGetJobsDto";

interface IJobSlice {
  isLoading: boolean;
  jobs: Array<JobType>;
}

const initialState: IJobSlice = {
  isLoading: false,
  jobs: []
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
    },
    setLoaded(state) {
      state.isLoading = false;
    },
    setJobs(state, action: PayloadAction<Array<JobType>>) {
      state.jobs = action.payload
    }
  }
})

export default jobSlice.reducer