import initialState, { IForecastState } from "./forecast.state";
import mutations from "./forecast.mutations";
import * as types from "./forecast.types";
import { IActionTyped } from "../../models";

export const reducers = (state: IForecastState = initialState, action: IActionTyped) => {
  switch (action.type) {

    default:
      return state;
  }
}
export default reducers