import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAIL
} from "redux/constants/message";
import { RESET } from "redux/constants/main";

const initialState = {
    isSendingMessage: false
}

const messageReducer = (state=initialState, action) => {
    switch(action.type){
        case POST_MESSAGE_REQUEST:
            return {
                ...state,
                isSendingMessage: true
            };
        
        case POST_MESSAGE_SUCCESS:
                return {
                    ...state,
                    isSendingMessage: false
                };

        case POST_MESSAGE_FAIL:
                return {
                    ...state,
                    isSendingMessage: false
                };

        case RESET:
            return initialState;

        default:
            return state;
    }
}

export default messageReducer;