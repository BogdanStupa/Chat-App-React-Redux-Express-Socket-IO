import {
    GET_CONVERSATIONS_REQUEST,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_FAIL,

    GET_CURRENT_CONVERSATION_REQUEST,
    GET_CURRENT_CONVERSATION_SUCCESS,
    GET_CURRENT_CONVERSATION_FAIL,
    GET_CURRENT_CONVERSATION_NO
} from "redux/constants/conversation";
import {
    RESET
} from "redux/constants/main";


const initialState = {
    conversationItems: {
        isFetching: false,
        conversationItemsArray: []
    },
    currentConversation: {
        isFetching: false,
        isActive: false,
        partnerNickname: null,
        partnerProfileColor: null,
        conversationId: null,
        conversationMessages: []
    }
};

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS_REQUEST:        
            return {
                ...state,
                ...state.conversations,
                conversationItems: {
                    isFetching: true
                }
            };
            
        case GET_CONVERSATIONS_SUCCESS: 
            return {
                ...state,
                ...state.conversations,
                conversationItems: {
                    isFetching: false,
                    conversationItemsArray: action.payload
                }
            };

        case GET_CONVERSATIONS_FAIL:
            return {
                ...state,
                ...state.conversations,
                conversationItems: {
                    isFetching: false,
                    errors: action.payload,
                    conversationItemsArray: []
                }
            };

        case GET_CURRENT_CONVERSATION_REQUEST: 
            return {
                ...state,
                ...state.conversations,
                currentConversation: {
                    isFetching: true,
                    isActive: true,
                    partnerNickname: action.payload.nickname,
                    partnerProfileColor: action.payload.profileColor,
                    conversationId: action.payload.id
                }
            };

        case GET_CURRENT_CONVERSATION_SUCCESS: 
            return {
                ...state,
                ...state.conversations,
                currentConversation: {
                    ...state.conversations.currentConversation,
                    isFetching: false,
                    isActive: true,
                    conversationMessages: action.payload
                }
            };
        
        case GET_CURRENT_CONVERSATION_FAIL: 
            return {
                ...state,
                ...state.conversations,
                currentConversation: {
                    ...state.conversations.currentConversation,
                    isFetching: false,
                    isActive: true,
                    errors: action.payload
                }
            }; 
        
        case GET_CURRENT_CONVERSATION_NO: 
            return {
                ...state,
                ...state.conversations,
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

