import { fetchWithToken } from '../utils/fetchWithToken';
import { createApi } from "@reduxjs/toolkit/dist/query/react";
import env from "react-dotenv"

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchWithToken({baseUrl: env.API_URL + '/user'}),
  endpoints: (build) => ({
    checkAuth: build.query<any, void>({
      query: () => ({
        url: '/auth'
      })
    }),
  }),
})