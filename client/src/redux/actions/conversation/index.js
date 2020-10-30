import {
    GET_CONVERSATIONS_REQUEST,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_FAIL,
    GET_CURRENT_CONVERSATION_REQUEST,
    GET_CURRENT_CONVERSATION_SUCCESS,
    GET_CURRENT_CONVERSATION_FAIL,
    GET_CURRENT_CONVERSATION_NO,

    SET_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION,
    SET_IS_SCROLLING_IN_CONVERSATIONS,

    ADD_MESSAGE_TO_CURRENT_CONVERSATION,    
    INCREMENT_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION,

    SEND_UPDATE_CURRENT_CONVERSATION_REQUEST,
    SEND_UPDATE_CURRENT_CONVERSATION_DONE,
} from "redux/constants/conversation";


export const getConversationsRequest = token => {
    return {
        type: GET_CONVERSATIONS_REQUEST,
        payload: token
    };
}

export const getConversationsSuccess = data => {
    return {
        type: GET_CONVERSATIONS_SUCCESS,
        payload: data
    };
}

export const getConversationsFail = error => {
    return {
        type: GET_CONVERSATIONS_FAIL,
        payload: error
    };
}


export const getCurrentConversationRequest = conversation => {
    return {
        type: GET_CURRENT_CONVERSATION_REQUEST,
        payload: conversation
    };
}

export const getCurrentConversationSuccess = data => {
    return {
        type: GET_CURRENT_CONVERSATION_SUCCESS,
        payload: data
    };
}

export const getCurrentConversationFail = error => {
    return {
        type: GET_CURRENT_CONVERSATION_FAIL,
        payload: error
    };
}

export const getCurrentConversationNo = () => {
    return {
        type: GET_CURRENT_CONVERSATION_NO
    };
}




export const setUnreadMessagesInCurrentConversationRequest = data => {
    return {
        type: SET_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION,
        payload: data
    };
}

export const setIsScrolling = () => {
    return {
        type: SET_IS_SCROLLING_IN_CONVERSATIONS,
    };
}




export const addMessageInCurrentConversation = data => {
    return {
        type: ADD_MESSAGE_TO_CURRENT_CONVERSATION,
        payload: data
    };
}

export const incrementUnreadMessagesInCurrentConversation = () => {
    return {
        type: INCREMENT_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION
    };
}
/*
    data: {
        partnerId,
        unreadMessages: int,
        token
    }
*/
export const sendUpdateCurrentConversationRequest = data => {
    return {
        type: SEND_UPDATE_CURRENT_CONVERSATION_REQUEST,
        payload: data
    };
}

export const sendUpdateCurrentConversationDone = () => {
    return {
        type: SEND_UPDATE_CURRENT_CONVERSATION_DONE
    };
}

