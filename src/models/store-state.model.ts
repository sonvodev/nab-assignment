import { IExceptionModel } from "./exception-model";
import { ActivityStatus } from "../common";

export interface IStoreState<T = {}> {
  activity: ActivityStatus
  payload?: T
  error?: IExceptionModel | null
  version?: number | null
  [x: string]: any
}