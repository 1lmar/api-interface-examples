import httpClient, { HttpClientResponse } from '../http/httpClient'
import { UserItem } from '../model'

export const getCurrentUser = () => {
  return httpClient.get<HttpClientResponse<UserItem>>('/session')
}
