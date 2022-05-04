import httpClient, { HttpClientResponse } from '../http/httpClient'

export const authenticate = (LOGIN: string, PASSWORD: string) => {
  return httpClient.post<HttpClientResponse<{ TOKEN: string }>>('/authorize', { LOGIN, PASSWORD })
}
