import {
    POST_MESSAGE_REQUEST,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAIL
} from "redux/constants/message";
import { RESET } from "redux/constants/main";

const initialState = {
    isFetching: false
}

const messageReducer = (state=initialState, action) => {
    switch(action.type){
        case POST_MESSAGE_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        
        case POST_MESSAGE_SUCCESS:
                return {
                    ...state,
                    isFetching: false
                };

        case POST_MESSAGE_FAIL:
                return {
                    ...state,
                    isFetching: false
                };

        case RESET:
            return initialState;

        default:
            return state;
    }
}

export default messageReducer;