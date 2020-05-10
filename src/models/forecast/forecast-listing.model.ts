import { IConsulatedWeather } from "./consoliated-weather.model";

export interface IForecaseListing {
  consolidated_weather: IConsulatedWeather[]
  title?: string
  location_type?: string
  woeid?: number
  latt_long?: string
  timezone?: string
}