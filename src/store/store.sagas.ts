import { all, fork } from "redux-saga/effects"
import { watchFilterLocation } from "./forecast/forecast.sagas";

function* rootSaga() {
  yield all([
    fork(watchFilterLocation)
  ]);
}

export default rootSaga;
