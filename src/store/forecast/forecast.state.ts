import { ActivityStatus } from "../../common";
import { IStoreState, ILocationListing, IForecaseListing } from "../../models";


export interface IForecastState {
  defaultLocation: IStoreState<ILocationListing>
  locations: IStoreState<ILocationListing[]>
  forecast: IStoreState<IForecaseListing>
}
class ForecastState implements IForecastState {
  defaultLocation: IStoreState<ILocationListing>
  locations: IStoreState<ILocationListing[]>
  forecast: IStoreState<IForecaseListing>
  /**
   *
   */
  constructor() {
    this.defaultLocation = {
      activity: ActivityStatus.NoActivity, payload: {
        title: "Ho Chi Minh City",
        location_type: "City",
        woeid: 1252431,
        latt_long: "10.759180,106.662498"
      }, error: null, version: null
    }
    this.locations = { activity: ActivityStatus.NoActivity, payload: [], error: null, version: null }
    this.forecast = {
      activity: ActivityStatus.NoActivity, payload: {
        consolidated_weather: []
      }, error: null, version: null
    }
  }

}


export default new ForecastState();
