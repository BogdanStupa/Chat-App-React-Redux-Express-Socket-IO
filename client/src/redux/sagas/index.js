import { all } from "redux-saga/effects";

import authSagas from "redux/sagas/auth";


export default function* rootSaga(){
    console.log("ROOTE SAGA");
    yield all([
        ...authSagas
    ]);
}
