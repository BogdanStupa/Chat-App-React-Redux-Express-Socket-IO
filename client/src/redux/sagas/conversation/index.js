import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    GET_CONVERSATIONS_REQUEST,
    GET_CURRENT_CONVERSATION_REQUEST
} from "redux/constants/conversation";
import {
    getConversationsSuccess,
    getConversationsFail,
    getCurrentConversationSuccess,
    getCurrentConversationFail
} from "redux/actions/conversation";
import constants from "modules/constants";



const CONVERSATIONS_URL = constants.API.ROOT + constants.API.ACTIONS.CONVERSATION;
const MESSAGE_URL = constants.API.ROOT + constants.API.ACTIONS.MESSAGE;


function fetchGetConversations(data) {
    return axios.get(CONVERSATIONS_URL, {
        headers: {
            "Authorization": data
        }
    });
}


function fetchMessagesOfConversation(data){
    return axios.get(MESSAGE_URL + `${data._id}`,{
        headers: {
            "Authorization": data.token,
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


function* getMessagesOfCurrentConversationsWorker(props){
    try{
        const { 
            token,
            partnerId: _id
        } = props.payload;
        const { data: { messages } } = yield call(fetchMessagesOfConversation, {token, _id});
        yield put(getCurrentConversationSuccess(messages));
    }catch(error){
        yield put(getCurrentConversationFail(error.message));
    }
}

const sagas = [
    takeLatest(GET_CONVERSATIONS_REQUEST, getConversationsWorker),
    takeLatest(GET_CURRENT_CONVERSATION_REQUEST, getMessagesOfCurrentConversationsWorker)
];

export default sagas;