export interface ILocationListing {
  title: string
  location_type: string
  woeid: number
  latt_long: string
}
export class LocationListing implements ILocationListing {
  title: string
  location_type: string
  woeid: number
  latt_long: string

  /**
   *
   */
  constructor(partial: Partial<ILocationListing> = {}) {
    this.title = partial.title!
    this.location_type = partial.location_type!
    this.woeid = partial.woeid!
    this.latt_long = partial.latt_long!
  }
}