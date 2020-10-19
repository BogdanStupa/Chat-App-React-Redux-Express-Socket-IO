import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    GET_CONVERSATIONS_REQUEST
} from "redux/constants/conversation";
import {
    getConversationsSuccess,
    getConversationsFail
} from "redux/actions/conversation";
import constants from "modules/constants";



const CONVERSATIONS_URL = constants.API.ROOT + constants.API.ACTIONS.CONVERSATION;

function fetchGetConversations(data) {
    return axios.get(CONVERSATIONS_URL, {
        headers: {
            "Authorization": data
        }
    });
}


function* getConversationsWorker(props) {
    try{
        const { data: { conversations } } = yield call(fetchGetConversations, props.payload);
        yield put(getConversationsSuccess(conversations));
    }catch(error){
        yield put(getConversationsFail(error));
    }
}


const sagas = [
    takeLatest(GET_CONVERSATIONS_REQUEST, getConversationsWorker)
];

export default sagas;