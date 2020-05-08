import { ActivityStatus } from "../common";
import {IExceptionModel} from "../models";

export class StoreMutations<State> {
  setLoading(state: State & { [key: string]: any }, key: string) {
    return Object.assign({}, state, {
      [key]: {
        ...state[key],
        activity: ActivityStatus.Loading,
        error: null,
        version: new Date().getTime()
      }
    })
  }
  setError(state: State & { [key: string]: any }, key: string, error: IExceptionModel | null) {

    return Object.assign({}, state, {
      [key]: {
        ...state[key],
        activity: ActivityStatus.LoadedFailed,
        error: error,
        version: new Date().getTime()
      }
    })
  }

  setLoaded(state: State & { [key: string]: any }, key: string) {
    return Object.assign({}, state, {
      [key]: {
        ...state[key],
        activity: ActivityStatus.Loaded,
        error: null,
        version: new Date().getTime()
      }
    })
  }
}