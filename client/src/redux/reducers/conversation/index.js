import {
    GET_CONVERSATIONS_REQUEST,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_FAIL,
    
    SET_UNREAD_MESSAGES_INCONVERSATIONS,
    SET_IS_SCROLLING_INCONVERSATIONS,

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
        /*
            conversationItemsArray = [{
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
            }]    
        */
    },
    currentConversation: {
        isFetching: false,
        isActive: false,
        isScrolling: true,
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
            
        case SET_UNREAD_MESSAGES_INCONVERSATIONS: 
            return {
                ...state,                 
                conversationItems: {
                    ...state.conversationItems,
                    conversationItemsArray: state.conversationItems.conversationItemsArray
                        .map(item => 
                            item._id === action.payload.conversationId ? { 
                                ...item, 
                                unreadMessages: action.payload.unreadMessages 
                            } : item
                        )
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
        
        case SET_IS_SCROLLING_INCONVERSATIONS:
            return {
                ...state, 
                currentConversation: {
                    ...state.currentConversation,
                    isScrolling: false
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

