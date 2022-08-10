import axios from 'axios'
import { refresh } from './userApi'

const $instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api/'
})

const $authInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api/',
})

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config
}

$authInstance.interceptors.request.use(authInterceptor)

$authInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error?.config;
    if (error?.response?.status === 401) {

      await refresh()

      return $authInstance.request(originalRequest);
    }
    return Promise.reject(error);
  }
);

export {$instance, $authInstance}