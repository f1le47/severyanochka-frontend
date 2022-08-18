import { fetchWithToken } from '../utils/fetchWithToken';
import { createApi } from "@reduxjs/toolkit/dist/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchWithToken({baseUrl: process.env.REACT_APP_API_URL + '/user'}),
  endpoints: (build) => ({
    checkAuth: build.query<any, void>({
      query: () => ({
        url: '/auth'
      })
    }),
  }),
})