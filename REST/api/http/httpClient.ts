import axios, { AxiosInstance } from 'axios'
import { responseInterceptorsCatch } from './axios/interceptors'

export interface HttpClientResponse<RESULT> {
  message: string
  data: RESULT
}

const httpClient: AxiosInstance = axios.create({
  baseURL: 'API_URL', //get api url from env file
})

httpClient.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

httpClient.interceptors.response.use(undefined, responseInterceptorsCatch)

export default httpClient
