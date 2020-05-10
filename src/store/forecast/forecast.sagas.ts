import { put, call } from "@redux-saga/core/effects";
import * as types from "./forecast.types";
import actions from "./forecast.actions";
import { IActionTyped, ILocationListing } from "../../models";
import { ForecastService, IForecastService } from "../../services/forecast.service";
import { delay, takeEvery } from "redux-saga/effects";

const service: IForecastService = new ForecastService();

export function* filterLocation(action: IActionTyped) {
  try {
    yield put(actions.setLoading(types.FILTER_BY_LOCATION_LOADING, "shareholders"))
    const location = yield call(service.filterLocation, action.payload);
    yield put({ type: types.FILTER_BY_LOCATION_LOADED, payload: location })

  } catch (error) {
    yield put(actions.setError(types.FILTER_BY_LOCATION_LOADED, "shareholders", error))
  }
}

export function* watchFilterLocation() {
  yield takeEvery(types.FILTER_BY_LOCATION, filterLocation)
}

export function* getLocationForecast(action: IActionTyped<ILocationListing>) {
  try {
    yield put({ type: types.SET_DEFAULT_LOCATION, payload: action.payload })
    yield delay(300)
    yield put(actions.setLoading(types.GET_FORECASTS_LOADING, "forecast"))
    const forecast = yield call(service.getForecastByWoeid, action.payload!.woeid);
    yield put({ type: types.GET_FORECASTS_LOADED, payload: forecast })
  } catch (error) {
    yield put(actions.setError(types.GET_FORECASTS_LOADED, "forecast", error))
  }
}


export function* watchGetLocationForecast() {
  yield takeEvery(types.GET_FORECASTS, getLocationForecast)
}
