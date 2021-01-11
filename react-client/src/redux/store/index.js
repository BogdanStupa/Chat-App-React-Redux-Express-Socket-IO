import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "redux/reducers";

import rootSaga from "redux/sagas";


const sagaMiddleware = createSagaMiddleware();
const middwares = [
    sagaMiddleware
];


let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(
    createRootReducer(),
    composeEnhancer(
        applyMiddleware(...middwares)
    )
);

sagaMiddleware.run(rootSaga);

export default store;