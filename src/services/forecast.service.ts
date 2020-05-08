import { BaseService } from "./base.service";

export interface IForecastService {
  filterLocation(location: string): Promise<any>;
}
export class ForecastService extends BaseService {
  /**
   *
   */
  constructor() {
    super();
  }

  filterLocation(string: string) {
    console.log('string ===>', string);

    return Promise.resolve([])
  }
}