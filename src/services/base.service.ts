import Axios, { AxiosRequestConfig } from "axios";

export abstract class BaseService {
  /**
   *
   */
  constructor() { }

  async post<T, Result = any>(path: string, data: T, config?: AxiosRequestConfig): Promise<Result> {
    const result: Result | any = await Axios.post(path, data, config);
    return result.data;
  }


  async get<T>(path: string, params?: { [key: string]: any }, config?: AxiosRequestConfig): Promise<any> {
    const result: any = await Axios.get(path, { params: params })
    return result.data
  }

  async getByReplacement<T>(path: string, params: { [key: string]: any }, config?: AxiosRequestConfig): Promise<T> {
    let replacedPath: string = path;

    const keys: string[] = Object.keys(params)
    for (let index = 0; index < keys.length; index++) {
      replacedPath = replacedPath.replace(keys[index], params[keys[index]])
    }
    const result: any = await Axios.get(replacedPath, config)
    return result
  }

  async delete(path: string, params?: { [key: string]: any }, config?: AxiosRequestConfig) {
    return await Axios.delete(path, { ...config, params: params })
  }
}