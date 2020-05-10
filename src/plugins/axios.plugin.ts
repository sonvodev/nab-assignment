import Axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return error
  }
)

Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return error
  }
)