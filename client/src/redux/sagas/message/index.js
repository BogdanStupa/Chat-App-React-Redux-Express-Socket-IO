import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { POST_MESSAGE_REQUEST } from "redux/constants/message";
import {
    postMessageSuccess,
    postMessageFail
} from "redux/actions/message";
import { 
    addMessageInCurrentConversation
 } from "redux/actions/conversation";
import constants from "modules/constants";


const MESSAGE_URL = constants.API.ROOT + constants.API.ACTIONS.MESSAGE;


function fetchPostMessage(data){
    return axios.post(MESSAGE_URL, 
        {
            _id: data.partnerId,
            message: data.message
        },
        {
            headers: {
                "Authorization": data.token
            }
        }
    );
}


/*
    props = {
        payload: {
            partnerId,
            message,
            token
        }
    }
*/
function* postMessageWorker(props){
    try{
        const { data } = yield call(fetchPostMessage, props.payload);
        yield put(postMessageSuccess());
        yield put(addMessageInCurrentConversation(data.resultAddMessage));
    }catch(error){
        yield put(postMessageFail());
    }
}


const sagas = [
    takeLatest(POST_MESSAGE_REQUEST, postMessageWorker)
];


export default sagas;