import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    GET_CONTACTS_REQUEST
} from "redux/constants/contact";
import {
    getContactsSuccess,
    getContactsFail
} from "redux/actions/contact";
import constants from "modules/constants";
import { refreshAccessToken } from "../saga-utils";

const CONTACT_URL = constants.API.ROOT + constants.API.ACTIONS.CONTACT;

function fetchGetContactsRequest(){
    return axios.get(CONTACT_URL);
}

function* workerGetContacts(){
    try{
        const { data } = yield call(fetchGetContactsRequest);
        yield put(getContactsSuccess(data));
    }catch(error){
        yield put(getContactsFail(error));
    }
}


const sagas = [
    takeLatest(GET_CONTACTS_REQUEST, workerGetContacts)
];

export default sagas;
