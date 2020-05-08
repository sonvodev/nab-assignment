import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./store.sagas";
import createSagaMiddleware from "@redux-saga/core";
import rootReducers from "./store.reducers";

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  sagaMiddleware.run(rootSaga);
  return store;
}
