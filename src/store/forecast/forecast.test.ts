import reducers from '../store.reducers';
import mutation from './forecast.mutations';
import { watchFilterLocation, filterLocation, watchGetLocationForecast, getLocationForecast } from "./forecast.sagas";
import { takeEvery } from 'redux-saga/effects';
import * as types from "./forecast.types";

describe('watchFilterLocation', () => {

  const genObject = watchFilterLocation();

  it('should wait for evey FILTER_BY_LOCATION action and do its business ', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(types.FILTER_BY_LOCATION, filterLocation));
  })

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

})


describe('watchGetLocationForecast', () => {

  const genObject = watchGetLocationForecast();

  it('should wait for evey GET_FORECASTS action and do its business ', () => {
    expect(genObject.next().value)
      .toEqual(takeEvery(types.GET_FORECASTS, getLocationForecast));
  })

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

})
