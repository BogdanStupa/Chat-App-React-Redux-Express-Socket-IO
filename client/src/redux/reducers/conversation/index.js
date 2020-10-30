import {
    GET_CONVERSATIONS_REQUEST,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_FAIL,
    
    SET_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION,
    SET_IS_SCROLLING_IN_CONVERSATIONS,

    GET_CURRENT_CONVERSATION_REQUEST,
    GET_CURRENT_CONVERSATION_SUCCESS,
    GET_CURRENT_CONVERSATION_FAIL,
    GET_CURRENT_CONVERSATION_NO,

    ADD_MESSAGE_TO_CURRENT_CONVERSATION,
    INCREMENT_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION,

    SEND_UPDATE_CURRENT_CONVERSATION_REQUEST,
    SEND_UPDATE_CURRENT_CONVERSATION_DONE
} from "redux/constants/conversation";
import {
    RESET
} from "redux/constants/main";


const initialState = {
    isFetching: false,
    conversationItemsArray: {},
    idConversations: [],
    /*
        conversationItemsArray = {
            _id: {
                unreadMessages: integer,
                _id: string,
                partner: {
                    partnerId: string,
                    nickname: string,
                    profileColor: string,
                    lastMessage: {
                        message: string,
                        _id: string,
                        dateTime: data
                    }
                }
            }
        }, 
        idConversations: [{
                _id: string,    
        }] 
    */
    currentConversation: {
        isFetching: false,
        isActive: false,
        isScrolling: true,
        isUpdating: false,
        partnerNickname: null,
        partnerProfileColor: null,
        partnerId:null,
        conversationId: null,
        unreadMessages: null,
        conversationMessages: []
    }
};

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS_REQUEST: 
            return {
                ...state,
                isFetching: true
            };

        case GET_CONVERSATIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                conversationItemsArray: action.payload.conversationItemsArray,
                idConversations: action.payload.idConversations
            };

        case GET_CONVERSATIONS_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload,
                conversationItemsArray: []
            };
            
        case SET_UNREAD_MESSAGES_IN_CURRENT_CONVERSATION:
            return {
                ...state,
                conversationItemsArray: {
                    ...state.conversationItemsArray,
                    [action.payload.conversationId]: { 
                        ...state.conversationItemsArray[action.payload.conversationId], 
                        unreadMessages: action.payload.unreadMessages 
                    }
                }
            };

        case GET_CURRENT_CONVERSATION_REQUEST:
            return {
                ...state,
                currentConversation: {
                    ...state.currentConversation,
                    isFetching: true,
                    isActive: true,
                    partnerNickname: action.payload.nickname,
                    partnerId: action.payload.partnerId,
                    partnerProfileColor: action.payload.profileColor,
                    conversationId: action.payload.conversationId,
                    unreadMessages: action.payload.unreadMessages
                }
            };

        case GET_CURRENT_CONVERSATION_SUCCESS:
            return {
                ...state,
                currentConversation: {
                    ...state.currentConversation,
                    isFetching: false,
                    isActive: true,
                    conversationMessages: action.payload
                }
            };
        
        case GET_CURRENT_CONVERSATION_FAIL: 
            return {
                ...state,
                currentConversation: {
                    ...state.currentConversation,
                    isFetching: false,
                    isActive: true,
                    errors: action.payload
                }
            }; 

        case ADD_MESSAGE_TO_CURRENT_CONVERSATION:
            return {
                ...state,
                currentConversation:{
                    ...state.currentConversation,
                    conversationMessages: [...state.currentConversation.conversationMessages, action.payload]
                }
            };
        
        case SET_IS_SCROLLING_IN_CONVERSATIONS:
            return {
                ...state, 
                currentConversation: {
                    ...state.currentConversation,
                    isScrolling: false
                }
            };

        case SEND_UPDATE_CURRENT_CONVERSATION_REQUEST:
            return {
                ...state, 
                currentConversation: {
                    ...state.currentConversation,
                    isUpdating: true
                }
            };
        case SEND_UPDATE_CURRENT_CONVERSATION_DONE:
                return {
                    ...state, 
                    currentConversation: {
                        ...state.currentConversation,
                        isUpdating: false
                    }
                };

        case GET_CURRENT_CONVERSATION_NO: 
            return {
                ...state,
                currentConversation: {
                    isFetching: false,
                    isActive: false
                }
            }; 

        case RESET:
            return initialState;

        default:
            return state;
    }
} 

export default conversationsReducer;

