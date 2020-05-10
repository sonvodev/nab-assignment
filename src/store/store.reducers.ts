import { combineReducers } from "redux";
import { IForecastState } from "./forecast/forecast.state";
import forecastReducer from "./forecast/forecast.reducers";

export interface IRootReducers {
  forecastReducer: IForecastState
}

export default combineReducers<IRootReducers>({
  forecastReducer: forecastReducer
})