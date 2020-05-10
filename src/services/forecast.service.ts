import { BaseService } from "./base.service";
import { ApiUrls } from "../common";
import { LocationListing } from "../models";

export interface IForecastService {
  filterLocation(location: string): Promise<any>;
  getForecastByWoeid(woeid: number): Promise<LocationListing[]>
}
export class ForecastService extends BaseService {
  /**
   *
   */
  constructor() {
    super();
  }

  async filterLocation(query: string) {

    return await super.get(ApiUrls.Location, { query })

  }


  async getForecastByWoeid(woeid: number): Promise<LocationListing[]> {
    return await super.get(ApiUrls.LocationForcast.replace("{woeid}", String(woeid)))
      .then(forecast => {
        return forecast
      })
      .catch(err => Promise.reject(err))
  }
  // filterForecast()
}