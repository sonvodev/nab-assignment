import * as types from "./forecast.types";
import { StoreActions } from "../store.actions";
import { IActionTyped } from "../../models";

class ForecastActions extends StoreActions {

  filterLocation(location: string): IActionTyped<string> {
    return { type: types.FILTER_BY_LOCATION, payload: location }
  }

}

export default new ForecastActions()