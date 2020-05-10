import { all, fork } from "redux-saga/effects"
import { watchFilterLocation, watchGetLocationForecast } from "./forecast/forecast.sagas";

function* rootSaga() {
  yield all([
    fork(watchFilterLocation),
    fork(watchGetLocationForecast)
  ]);
}

export default rootSaga;
