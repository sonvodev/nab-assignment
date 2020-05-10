import { IStoreState, ILocationListing, IForecaseListing } from "../../models";

export interface Props {
  storeDefaultLocation?: IStoreState<ILocationListing>;
  storeLocations?: IStoreState<ILocationListing[]>
  storeForecast?: IStoreState<IForecaseListing>
  filterLocation?(query: string): void
  fetchForecast?(location: ILocationListing): void
}
export interface State {
  location: string

  selectedLocation: ILocationListing[];

}