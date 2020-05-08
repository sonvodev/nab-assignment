import { put, call, takeLatest } from "@redux-saga/core/effects";
import * as types from "./forecast.types";
import actions from "./forecast.actions";
import { IActionTyped } from "../../models";
import { ForecastService, IForecastService } from "../../services/forecast.service";

const service: IForecastService = new ForecastService();

export function* watchFilterLocation() {
  yield takeLatest(types.FILTER_BY_LOCATION, function* (action: IActionTyped) {
    try {
      yield put(actions.setLoading(types.FILTER_BY_LOCATION_LOADING, "shareholders"))
      const location = yield call(service.filterLocation, action.payload);


    } catch (error) {
      yield put(actions.setError(types.FILTER_BY_LOCATION_LOADED, "shareholders", error))
    }
  })
}
