import JobApi from "http/jobApi";
import { jobSlice } from "redux/reducers/jobSlice";
import { notificationSlice } from "redux/reducers/notificationSlice";
import { AppDispatch } from "redux/store";
import { IGetJobs } from "types/http/IJobApi";

export const jobActionCreators = {
  getJobs: ({page, amount}: IGetJobs) => async (dispatch: AppDispatch) => {
    try {
      dispatch(jobSlice.actions.setLoading())
      const response = await JobApi.getJobs({page, amount})
      dispatch(jobSlice.actions.setJobs(response.jobs))
      dispatch(jobSlice.actions.setLoaded())
    } catch(e) {
      dispatch(notificationSlice.actions.setError(e.response.data.message))
      dispatch(jobSlice.actions.setLoaded())
    }
  }
}