import initialState, { IForecastState } from "./forecast.state";
import mutations from "./forecast.mutations";
import * as types from "./forecast.types";
import { IActionTyped } from "../../models";

export const reducers = (state: IForecastState = initialState, action: IActionTyped) => {
  switch (action.type) {

    case types.FILTER_BY_LOCATION_LOADING:
    case types.GET_FORECASTS_LOADING:
      return mutations.setLoading(state, action.key);

    case types.FILTER_BY_LOCATION_FAILED:
    case types.GET_FORECASTS_FAILED:
      return mutations.setError(state, action.key, action.payload);

    case types.FILTER_BY_LOCATION_LOADED:
      return mutations.setLocations(state, action.payload);
    case types.SET_DEFAULT_LOCATION:
      return mutations.setDefaultLocation(state, action.payload);
    case types.GET_FORECASTS_LOADED:
      return mutations.setForecast(state, action.payload);

    default:
      return state;
  }
}
export default reducers