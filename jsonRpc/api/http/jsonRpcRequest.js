import axios from "axios";
import { getApiToken, getApiUrl } from "@/constants";

const httpClient = axios.create({
  baseURL: `${getApiUrl()}/jsonrpc`,
});

httpClient.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getApiToken()}`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

httpClient.interceptors.response.use(function (response) {
  if (response.data.error)
    return responseInterceptorsCatch(response.data.error);
  return response.data.result;
}, undefined);

/**
 * @param {{ message: string, code: string, data: string }} error
 */
function responseInterceptorsCatch(error = {}) {
  if (error.code === "Unauthorized") {
    //TODO: create here unauthorized logout handler
  }
  return Promise.reject(error);
}

export default function jsonRpcRequest(method, params = {}) {
  return httpClient.post("", {
    jsonrpc: "2.0",
    id: 1,
    method,
    params,
  });
}
