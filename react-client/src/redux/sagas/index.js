import { all } from "redux-saga/effects";

import authSagas from "redux/sagas/auth";
import contactSaga from "redux/sagas/contact";
import conversationSagas from "redux/sagas/conversation";
import messageSagas from "./message";
import socketSagas from "./socket";


export default function* rootSaga(){
    console.log("ROOTE SAGA");
    yield all([
        ...authSagas,
        ...contactSaga,
        ...conversationSagas,
        ...messageSagas,
        ...socketSagas
    ]);
}
