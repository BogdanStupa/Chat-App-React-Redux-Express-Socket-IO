import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SEARCH_NEW_CONTACT_REQUEST } from "redux/constants/contact";
import constants from "modules/constants";
import { refreshAccessTokenWorker } from "../saga-utils";
import { searchNewContactDone } from "redux/actions/contact";
import { getToken } from "modules/utils";


const CONTACT_URL = constants.API.ROOT + constants.API.ACTIONS.CONTACT;


function fetchGetContact(data){
    return axios.get(CONTACT_URL + `/${data.nickname}`,
        {
            headers: {
                "Authorization": data.token,
            }
        }
    )
}

function* workerGetContact(props){
    try{
        const { token } = yield getToken();
        const { data: { contact } } = yield call(fetchGetContact,{ ...props.payload, token });
        yield put(searchNewContactDone(contact));
    }catch(error){
        yield call(refreshAccessTokenWorker, error.response, props);
        yield put(searchNewContactDone(null));
    }
}


const sagas = [
    takeLatest(SEARCH_NEW_CONTACT_REQUEST, workerGetContact)
];

export default sagas;
