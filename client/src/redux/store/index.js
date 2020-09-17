import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "redux/reducers";
import * as utils from "modules/utils";

import { helloSaga } from "redux/sagas";


const sagaMiddleware = createSagaMiddleware();
const middwares = [
    sagaMiddleware
];


let composeEnhancer = compose;
if (utils.isDevelopmentEnv()) {
	if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}
}



const store = createStore(
    createRootReducer(),
    composeEnhancer(
        applyMiddleware(...middwares)
    )
);

sagaMiddleware.run(helloSaga);

export default store;