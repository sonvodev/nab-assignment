import { StoreMutations } from "../store.mutations";
import { IForecastState } from "./forecast.state";
import { ILocationListing, IForecaseListing } from "../../models";
import { ActivityStatus } from "../../common";

class ForecastMutations extends StoreMutations<IForecastState>{

  setDefaultLocation(state: IForecastState, location: ILocationListing) {
    return Object.assign({}, state, {
      defaultLocation: location
    })
  }


  setLocations(state: IForecastState, locations: ILocationListing[]) {
    return Object.assign({}, state, {
      locations: {
        activity: ActivityStatus.Loaded,
        payload: locations,
        version: new Date().getTime(),
        error: null
      }
    })
  }

  setForecast(state: IForecastState, forecast: IForecaseListing) {
    return Object.assign({}, state, {
      forecast: {
        activity: ActivityStatus.Loaded,
        payload: forecast,
        version: new Date().getTime(),
        error: null
      }
    })
  }

}

export default new ForecastMutations();
