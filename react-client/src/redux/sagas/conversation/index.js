import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
    GET_CONVERSATIONS_REQUEST,
    GET_CURRENT_CONVERSATION_REQUEST,
    SEND_UPDATE_CURRENT_CONVERSATION_REQUEST
} from "redux/constants/conversation";
import {
    getConversationsSuccess,
    getConversationsFail,
    getCurrentConversationSuccess,
    getCurrentConversationFail,
    sendUpdateCurrentConversationDone
} from "redux/actions/conversation";
import constants from "modules/constants";
import { 
    refreshAccessTokenWorker 
} from "../saga-utils";
import {
    getToken
} from "modules/utils";


const CONVERSATIONS_URL = constants.API.ROOT + constants.API.ACTIONS.CONVERSATION;
const MESSAGE_URL = constants.API.ROOT + constants.API.ACTIONS.MESSAGE;


function fetchGetConversations(data) {
    return axios.get(CONVERSATIONS_URL, {
        headers: {
            "Authorization": data.token 
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

function fetchSendingUpdateConversaion(data){;
    return axios.put(CONVERSATIONS_URL, 
        {
            _id: data.partnerId,
            conversation:{  
                unreadMessages: data.unreadMessages
            },
            makeChat: data.makeChat
        },
        {
            headers: {
                "Authorization": data.token,
            }
        }
    );
}


function* getConversationsWorker(props) {
    try{
        const { token } = yield call(getToken);
        
        const { data: { conversations } } = yield call(fetchGetConversations, { token }); 

        const idConversations = conversations.map(item => item._id);
        const conversationItemsArray = {};
        idConversations.forEach((item, index) => {
            conversationItemsArray[item] = {
                ...conversations[index]
            }
        });
        yield put(getConversationsSuccess({ idConversations, conversationItemsArray }));
    }catch(error){
        yield call(refreshAccessTokenWorker, error.response, props);
        yield put(getConversationsFail(error));
    }
}


function* getMessagesOfCurrentConversationsWorker(props){
    try{
        const { token } = yield call(getToken);
        const { partnerId: _id } = props.payload;

        const { data: { messages } } = yield call(fetchMessagesOfConversation, {token, _id});
        
        yield put(getCurrentConversationSuccess(messages));
    }catch(error){
        yield call(refreshAccessTokenWorker, error.response, props);
        yield put(getCurrentConversationFail(error.message));
    }
}

function* sendUpdateConversationWorker(props){
    try {
        const { token } = yield call(getToken);
        yield call(fetchSendingUpdateConversaion,{ token, ...props.payload });
        yield put(sendUpdateCurrentConversationDone());
    } catch (error) {
        yield call(refreshAccessTokenWorker, error.response, props);
        yield put(sendUpdateCurrentConversationDone());
    }
}

const sagas = [
    takeLatest(GET_CONVERSATIONS_REQUEST, getConversationsWorker),
    takeLatest(GET_CURRENT_CONVERSATION_REQUEST, getMessagesOfCurrentConversationsWorker),
    takeLatest(SEND_UPDATE_CURRENT_CONVERSATION_REQUEST, sendUpdateConversationWorker)
];

export default sagas;