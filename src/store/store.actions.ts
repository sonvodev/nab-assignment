import { IActionTyped, IExceptionModel } from "../models";

export class StoreActions {
  setLoading(type: string, property: string): IActionTyped<string> {
    return { type, key: property }
  }
  setError(type: string, property: string, error: IExceptionModel | null) {
    return { type, key: property, payload: error }
  }

  setLoaded(type: string, property: string) {
    return { type, key: property }
  }
}
