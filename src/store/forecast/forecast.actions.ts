import * as types from "./forecast.types";
import { StoreActions } from "../store.actions";
import { IActionTyped, ILocationListing } from "../../models";

class ForecastActions extends StoreActions {

  filterLocation(location: string): IActionTyped<string> {
    return { type: types.FILTER_BY_LOCATION, payload: location }
  }

  fetchForecast(location: ILocationListing): IActionTyped<ILocationListing> {
    return { type: types.GET_FORECASTS, payload: location }
  }

}

export default new ForecastActions()