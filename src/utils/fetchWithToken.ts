import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const fetchWithToken = ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }) => {
  return fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
  
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
  
      return headers
    }
  })
}