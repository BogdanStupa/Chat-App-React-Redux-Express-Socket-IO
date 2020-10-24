import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAIL
} from "redux/constants/message";

export const postMessageRequest = data => {
    return {
        type: POST_MESSAGE_REQUEST,
        payload: data
    };
}

export const postMessageSuccess = () => {
    return {
        type: POST_MESSAGE_SUCCESS,
    };
}

export const postMessageFail = () => {
    return {
        type: POST_MESSAGE_FAIL,
    };
}